import React, { useState } from 'react';
import {
   StyleSheet,
   View,
   FlatList,
   Button
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem'

export default function App() {
   // Goal order (First goal gets number 1, second goal gets 2, and so on)
   const [count, setCount] = useState(1);
   // List of goals
   const [goalList, setGoalList] = useState([]);

   const [showModal, setShowModal] = useState(false);

   /*
   *  takes a goal and a tool to change the given goal. Also, 
   *  adds the given input to the goal list with a corresponding order number.  
   */
   const addGoal = (inputGoal, setInputGoal) => {
      setGoalList(curr => [...curr, {
         id: Math.random().toString(), value: count + ". " + inputGoal
      }]);
      setCount(count + 1);
      setInputGoal("");
      // difference between above and below code?
      // setGoalList([...curr, inputGoal]);
   }

   /*
   * takes a goal and deletes the given goal from the user's list.
   */
   const deleteGoal = goal => {
      setGoalList(curr => curr.filter(element => element.id !== goal));
   }

   return (
      <View style={styles.screen}>
         <Button title="Add a Goal" onPress={() => setShowModal(true)}/>
         <GoalInput modalStatus={showModal} addGoal={addGoal} />
         <FlatList
            data={goalList}
            renderItem={itemData =>
               <GoalItem 
                  id={itemData.item.id}
                  value={itemData.item.value} 
                  deleteGoal={deleteGoal} 
               />}>
         </FlatList>
      </View>
   );
}

const styles = StyleSheet.create({
   screen: {
      padding: 50
   }
});
