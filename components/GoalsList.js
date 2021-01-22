import React from 'react';
import { View, Text, FlatList } from 'react-native';

const GoalsList = props => {
   return (
      <FlatList
         data={goalList}
         renderItem={itemData =>
            <View style={styles.goalList}>
               <Text>{itemData.item.value}</Text>
            </View>}>
      </FlatList>
   );
};

export default GoalsList;