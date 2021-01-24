import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
   return (
      <TouchableOpacity onPress={() => props.deleteGoal(props.id)}>
         <View style={styles.goalList}>
            <Text>{props.value}</Text>
         </View>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   goalList: {
      borderWidth: 1,
      marginVertical: 6,
      padding: 10,
      width: '87%',
      backgroundColor: '#99FFFF'
   }
});

export default GoalItem;