import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [inputGoal, setInputGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  const inputGoalHandler = input => {
    setInputGoal(input);
  } 

  const addGoal = () => {
    setGoalList([...goalList, inputGoal]);
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
      <View>
        {goalList.map(goal => 
                      <View key={goal} style={styles.goalList}>
                        <Text>{goal}</Text>
                      </View>)}
      </View>
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
    backgroundColor: 'grey'
  }
});
