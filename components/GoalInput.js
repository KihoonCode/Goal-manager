import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
   // user's current goal
   const [inputGoal, setInputGoal] = useState("");

   /*
   * inputGoalHandler keeps track of goal that user is typing. 
   */
   const inputGoalHandler = input => {
      setInputGoal(input);
   }

   return (
      <View style={styles.input_container}>
         <TextInput
            placeholder="Your goal"
            style={styles.input}
            onChangeText={inputGoalHandler}
            value={inputGoal}
         />
         <Button title="ADD"
            onPress={() => props.addGoal(inputGoal, setInputGoal)}
         />
      </View>
   );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;