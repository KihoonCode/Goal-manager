import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
   return (
      <TouchableOpacity onPress={() => props.deleteGoal(props.id)}>
         <View style={styles.goalList}>
            <Text style={styles.textSize}>{props.value}</Text>
         </View>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   goalList: {
      borderWidth: 1,
      marginVertical: 8,
      padding: 15,
      width: '100%',
      backgroundColor: '#99FFFF',
      borderRadius: 30,
      alignItems: 'center'
   },

   textSize: {
      fontSize: 20
   }
});

export default GoalItem;