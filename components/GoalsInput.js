import React from 'react';
import { } from 'react-native';

const GoalsInput = props => {
   return (
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
   );
};

export default GoalsInput;