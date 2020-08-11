import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Colors from '../config/Colors/Colors'
import AppText from './AppText'

export default function AppButton({ title, onPress }) {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
          <AppText style={styles.text}>{title}</AppText>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
button: 
{
backgroundColor: Colors.orange,
borderRadius: 25,
justifyContent: "center",
alignItems: "center",
padding: 10,
width: "100%"

},
text: 
{
color: Colors.WhiteColor,
fontSize: 18,
textTransform: "uppercase",
fontWeight: "bold"

}

})
