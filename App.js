import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  // user's goal
  const [inputGoal, setInputGoal] = useState("");
  // user's goal order
  const [count, setCount] = useState(1);
  // list of goals of user
  const [goalList, setGoalList] = useState([]);

  const inputGoalHandler = input => {
    setInputGoal(input);
  } 

  const addGoal = () => {
    setGoalList([...goalList, {id: Math.random().toString() , value: count + ". " + inputGoal}]);
    setCount(count + 1);
    // difference between above and below code
    //setGoalList(curr => [...curr, inputGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.input_container}>
        <TextInput 
          placeholder="Your goal"  
          style={styles.input}
          onChangeText={inputGoalHandler} 
          value={inputGoal}  
        />
        <Button title="ADD"
          onPress={addGoal}       
        />
      </View>
      <FlatList 
        data={goalList} 
        renderItem={itemData => 
                    <View style={styles.goalList}>
                      <Text>{itemData.item.value}</Text>
                    </View>}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

  input_container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  
  input: {
    width: '87%',
    borderColor: "black", 
    borderWidth: 1, 
    padding: 10
  },

  goalList: {
    borderWidth: 1,
    marginVertical: 7,
    padding: 10,
    width: '87%',
    backgroundColor: '#99FFFF'
  }
});
