import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList,
 ImageBackground,
 AsyncStorage
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalState, setModalState] = useState(false)
  useEffect(() => {
    console.log('loaded')
    AsyncStorage.getItem('ToDo', (err, result) => {
      if (result === null){
        
      }
    });
  });
  const addGoalHandler = goal => {
    console.log('running')
    // setCourseGoals(currentGoals => [
    //   ...currentGoals,
    //   { id: Math.random().toString(), value: goal }])
    setModalState(false)
    console.log(courseGoals)
    AsyncStorage.setItem('UID123', JSON.stringify({'test':'1'}), () => {
      AsyncStorage.mergeItem('UID123', JSON.stringify({'todo':goal}), () => {
        AsyncStorage.getItem('UID123', (err, result) => {
          console.log(result);
          // setCourseGoals(result)
        });
      });
    });
  }
  const cancel = () => {
    setModalState(false)
  }
  const onDelete = (toDelete) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== toDelete)
    })
  }
  return (
    <ImageBackground source={require('./assets/night.jpg')} style={style.screen}>
      <Button title="Add New Goal" onPress={() => setModalState(true)} />
      <GoalInput add={addGoalHandler} cancel={cancel} modalState={modalState} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem onDelete={onDelete} id={itemData.item.id} title={itemData.item.value} />}
      />
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    paddingTop: 50
  },
})

