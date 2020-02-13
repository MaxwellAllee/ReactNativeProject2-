import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen'
import GameOver from './screens/GameOver'
import colors from './constants/colors';

const  theFonts = ()=> Font.loadAsync({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  'lemonada': require('./assets/fonts/Lemonada.ttf'),
  'perm': require('./assets/fonts/perm.ttf')
})

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [rounds, setRounds] = useState(0)
  const [loaded, setLoaded] = useState(false)

  if(!loaded){
    return <AppLoading startAsync={theFonts} onFinish={()=>setLoaded(true)} onError={err=> console.log(err)}
     />
  }

  const configNewGameHandler = () => {
    setRounds(0)
    setUserNumber(null)
  }
  const StartGameHandler = theirNum => {
    setUserNumber(theirNum)
    setRounds(0)
  }
  const RoundsHandler = numRounds => {
    setRounds(numRounds)
  }
  let content = <StartGameScreen pageSwitch={StartGameHandler} />

  if (userNumber && rounds <= 0) content = <GameScreen userChoice={userNumber} pageSwitch={RoundsHandler} />
  else if (rounds) content = <GameOver numberOfRounds={rounds} restart={configNewGameHandler} userGuess={userNumber} />
  return (
    <View style={styles.screen}>
      <Header  title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
