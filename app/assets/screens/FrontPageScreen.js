import React from 'react'
import {Text, fontFamily, ImageBackground, StyleSheet, View, Button, Image, Dimensions, Platform } from 'react-native'
import colors from "../Colors/Colors";
import FlatButton from '../Components/Buttons';
import AllChamps from '../DataDragon/ChampionData/champion.json'
import MainPageScreen from './MainChampPage'


function FrontPageScreen({navigation}) {
    return (
        <ImageBackground 
       style={StylesForButton.background}
        source={require("../Images/FrontPageBackground.jpg")}
        >
        <Image style={logoStyle.image} source={require('../Images/LeagueProLogo.png')}/>

        <View>

       <FlatButton text='Login' whatStyle={StylesForButton.loginButton} onPress={console.log(Object.keys(AllChamps.data))} />
       <FlatButton text='Register' whatStyle={StylesForButton.registerButton} onPress={console.log('worksToo')} />

       <FlatButton text='Skip' whatStyle={StylesForButton.ContinueWithoutButton} onPress={console.log('Hej') } />

        </View>
        
        </ImageBackground>
      
    );
}


//For "League Pro" - Logo
const logoStyle = StyleSheet.create({
   image:
    {
        flex: 1,
        marginTop: -450,
        width: null,
        height: null,
        resizeMode: 'contain'}
})

//Buttons styles properties
const StylesForButton = StyleSheet.create({
    background:{
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
