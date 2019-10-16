import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const click = () => {
    props.add(enteredGoal)
    setEnteredGoal('')
  }
  const changeMind = () => {
    props.cancel()
    setEnteredGoal('')
  }
  return (
    <Modal visible={props.modalState} animationType={'slide'}>
      <View style={style.topBox}>
        <TextInput placeholder="Course Goal"
          style={style.inputBox}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={style.buttonBox}>
          <View style={style.button}>
          <Button title='CANCEL' color='red' onPress={changeMind} />
          </View>
          <View style={style.button}>
          <Button title='ADD' onPress={click} />
          </View>
        </View>
      </View>
    </Modal>
  )
}
const style = StyleSheet.create({
  topBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    backgroundColor: 'white',
    marginBottom: 5
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button:{
    width: '40%'
  }

})
export default GoalInput