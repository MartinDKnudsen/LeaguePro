import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Colors from '../config/Colors/Colors'
import AppText from './Text'

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
backgroundColor: Colors.WhiteColor,
borderRadius: 50,
justifyContent: "center",
alignItems: "center",
padding: 10,
width: 200,
alignSelf: 'center',
marginTop: 20

},
text: 
{
color: Colors.Black,
fontSize: 18,
fontWeight: "bold"

}

})
