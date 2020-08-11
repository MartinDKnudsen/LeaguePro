import React from 'react'
import { Text, fontFamily, ImageBackground, StyleSheet, View, Button, Image, Dimensions, Platform } from 'react-native'
import colors from "../config/Colors/Colors";
import SpecChamp from '../DataDragon/ChampionData/champion/Anivia.json';
import AllChamps from '../DataDragon/ChampionData/champion.json'



function FrontPageScreen() {
   
        
   
}


const StylesForButton = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
    },
    loginButton:
    {
        width: '100%',
        height: 60,
        backgroundColor: colors.loginButton,
        borderColor: "black",
        borderWidth: 4,
        borderRadius: 36,
        marginBottom: 5,
        alignSelf: "center"

    },
    registerButton:
    {
        width: '100%',
        height: 60,
        backgroundColor: colors.registerButton,
        borderColor: "black",
        borderWidth: 4,
        borderRadius: 36,
        marginBottom: 5
    },
    ContinueWithoutButton:
    {
        width: '100%',
        height: 60,
        backgroundColor: colors.ContinueWithoutButton,
        borderColor: "black",
        borderWidth: 4,
        borderRadius: 36,
        marginBottom: 5
    },
})


export default FrontPageScreen;