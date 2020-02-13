import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'


const GameOver =props=> {
    return(
        <View style ={styles.screen}>
            <Text>
                The Game is over!
            </Text>
            <Text>
                Number of rounds: {props.numberOfRounds}!
            </Text>
            <Text>
                To guess: {props.userGuess}
            </Text>
            <Button title="NEW GAME" onPress={props.restart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOver