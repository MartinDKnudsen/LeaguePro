import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../config/Colors/Colors';

export default function Separator() {
    return  <View style={styles.sperator}/>
}
const styles = StyleSheet.create({

sperator: {
width: '100%',
height: 1,
backgroundColor: Colors.Black
}
})
