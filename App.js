import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,  
  Button, 
  ScrollView, 
  FlatList 
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goal => {
    console.log(goal)
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goal }])
  }
  return (
    <View style={style.screen}>
      <GoalInput add={addGoalHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
        />
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'purple',
    padding: 50
  }
})

