import React, { useState } from 'react';
import { 
  StyleSheet, 
  View,
  Button,
  FlatList 
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalState, setModalState] = useState(false)
  const addGoalHandler = goal => {
    console.log('running')

    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goal }])
      setModalState(false)
  }
  const cancel = ()=>{
    setModalState(false)
  }
  const onDelete =(toDelete)=>{
    setCourseGoals(currentGoals=>{
      return currentGoals.filter((goal)=> goal.id !== toDelete)
    })
  }
  return (
    <View style={style.screen}>
      <Button title="Add New Goal" onPress={()=>setModalState(true)}/>
      <GoalInput add={addGoalHandler} cancel={cancel} modalState={modalState}  />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem onDelete={onDelete} id={itemData.item.id} title={itemData.item.value} />}
        />
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'purple',
    padding: 30,
    paddingTop: 50
  },
})

