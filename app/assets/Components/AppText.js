import React from 'react'
import { StyleSheet, Text, View, ImagePropTypes } from 'react-native'

export default function appText({children, style}) {
    return (
       <Text style={[customStyle.TextForApp, style]}>{children}</Text>
        
    )
}

const customStyle = StyleSheet.create({

    TextForApp: {

        fontSize: 28,
        fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
        marginTop: 6
    }
})
