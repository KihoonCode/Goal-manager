import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

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
      <Modal visible={props.modalStatus} animationType="slide">
         <View style={styles.input_container}>
            <TextInput
               placeholder="Your goal"
               style={styles.input}
               onChangeText={inputGoalHandler}
               value={inputGoal}
            />
            <View style={styles.menu}>
               <View style={styles.button}>
                  <Button title="CANCEL" color="red" onPress={props.cancel} />
               </View>
               <View style={styles.button}>
                  <Button
                     title="ADD"
                     onPress={() => props.addGoal(inputGoal, setInputGoal)}
                  />
               </View>
            </View>
         </View>
      </Modal>
   );
};

const styles = StyleSheet.create({
   input_container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },

   input: {
      width: '87%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      margin: 10
   },

   menu: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center'
   },

   button: {
      width: '40%'
   }
});

export default GoalInput;