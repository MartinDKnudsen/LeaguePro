import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import Colors from '../Colors/Colors'
import AppText from './AppText'

export default function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}> {title} </AppText>
            <AppText style={styles.subTitle}> {subTitle} </AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
card: {
borderRadius: 15,
backgroundColor: Colors.WhiteColor,
marginBottom: 20,
overflow: 'hidden'
},
detailsContainer: {
padding: 20,

},
image: {
width: '100%',
height: '80%',

},
    subTitle: {
color: Colors.registerButton,
fontWeight: 'bold'
    },
title: {
marginBottom: 7,
},

})
