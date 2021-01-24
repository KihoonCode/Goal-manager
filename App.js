import React, { useState } from 'react';
import {
   StyleSheet,
   View,
   FlatList
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem'

export default function App() {
   // Goal order (First goal gets number 1, second goal gets 2, and so on)
   const [count, setCount] = useState(1);
   // List of goals
   const [goalList, setGoalList] = useState([]);

   /*
   *  addGoal takes a goal and a tool to change the given goal. With the given 
   *  goal, addGoal adds it to the goal list with a corresponding order number.  
   */
   const addGoal = (inputGoal, setInputGoal) => {
      setGoalList([...goalList, {
         id: Math.random().toString(), value: count + ". " + inputGoal
      }]);
      setCount(count + 1);
      setInputGoal("");
      // difference between above and below code
      //setGoalList(curr => [...curr, inputGoal]);
   }

   return (
      <View style={styles.screen}>
         <GoalInput addGoal={addGoal} />
         <FlatList
            data={goalList}
            renderItem={itemData => <GoalItem value={itemData.item.value} />}>
         </FlatList>
      </View>
   );
}

const styles = StyleSheet.create({
   screen: {
      padding: 50
   }
});
