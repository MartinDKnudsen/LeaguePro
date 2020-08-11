import React from 'react';
import {TouchableOpacity, View, Text, Alert } from 'react-native';

import { customStyle } from './style'


export default function FlatButton({text, onPress, whatStyle})
{
return (

<TouchableOpacity onPress={onPress}>
<View style={whatStyle}>

 <Text style={customStyle.TextForApp}>{text}</Text> 

</View>

</TouchableOpacity>
)
}
