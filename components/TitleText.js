import React from   'react';
import { Text, StyleSheet } from 'react-native'

const BodyText = props => <Text style={styles.title}>{props.children}</Text>

const styles = StyleSheet.create({
    title : {
        fontFamily : 'open-sans-bold'
    }
});

export default BodyText;