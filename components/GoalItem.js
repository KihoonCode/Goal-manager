import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
   return (
      <View style={styles.goalList}>
         <Text>{props.value}</Text>
      </View>
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