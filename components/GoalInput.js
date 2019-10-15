import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = enteredText => {
      setEnteredGoal(enteredText);
    };
    return(
        <View style={style.topBox}>
        <TextInput placeholder="Course Goal"
          style={style.inputBox}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={props.add.bind(this, enteredGoal)}/>
      </View>
    )
}
const style = StyleSheet.create({
    topBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      inputBox: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%'
      },
})
export default GoalInput