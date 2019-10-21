import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
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
  const [editing, setEditing] = useState(false)
  useEffect(() => {
    console.log('loaded')
    if (!editing) {
      AsyncStorage.getItem('todo', (err, result) => {
        if (result && !courseGoals.length && result !== '{"todo":[]}') {
          console.log(result, courseGoals, 'made it in')
          setCourseGoals(JSON.parse(result).todo.map(goalz => { return { id: Math.random().toString(), value: goalz } }))
          setEditing(true)
        }
        else if (!result) AsyncStorage.setItem('todo', JSON.stringify({ todo: [] }), (err, rez) => {
          if (err) throw err
          setEditing(true)
        })
      });
    }
  });

  const clearIt = () => {
    AsyncStorage.clear().then(() => console.log('Cleared'))
    setCourseGoals([])
  }
  const addGoalHandler = goal => {
    console.log('running')

    setModalState(false)
    console.log(courseGoals)
    AsyncStorage.getItem('todo', (err, result) => {
      let holder = JSON.parse(result)
      holder.todo.push(goal)
      console.log(holder)
      AsyncStorage.mergeItem('todo', JSON.stringify(holder), (err) => {
        if (err) console.log('erorr eroor', err)
        else{

          console.log(res);
          setCourseGoals(currentGoals => [
            ...currentGoals,
            { id: Math.random().toString(), value: goal }])
      }
      });

    })
  }
  const cancel = () => {
    setModalState(false)
  }
  const onDelete = (toDelete) => {
    AsyncStorage.getItem('todo', (err, result) => {
      let holder = JSON.parse(result)
      holder.todo.push(goal)
      console.log(holder)
      AsyncStorage.mergeItem('todo', JSON.stringify(holder), (err) => {
        if (err) throw err
        else {
          AsyncStorage.getItem('todo', (err, res) => {
            console.log(res);
            setCourseGoals(currentGoals => {
              return currentGoals.filter((goal) => goal.id !== toDelete)
            })
          });
        }
      });
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
      <Button title='clear' onPress={clearIt} />
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

