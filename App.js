import React, { useState, useEffect} from "react";
import WelcomeScreen from "./app/assets/screens/FrontPageScreen";
import ListingDetailsScreen from "./app/assets/screens/ListingDetailsScreen";
import MessagesScreen from "./app/assets/screens/MessagesScreen";
import Screen from "./app/assets/Components/Screen";
import Icon from "./app/assets/Components/icon";
import Messages from "./app/assets/Components/Messages";
import AccountScreen from "./app/assets/screens/AccountScreen";
import ListingChampsScreen from "./app/assets/screens/ListingChampsScreen";
import { TextInput, Text, Switch, Image } from "react-native";
import AppTextInput from "./app/assets/Components/TextInput";
import AppPicker from "./app/assets/Components/Picker";
import AppText from "./app/assets/Components/Text";
import LoginScreen from "./app/assets/screens/LoginScreen";
import AppButton from "./app/assets/Components/Button";
import RegisterScreen from './app/assets/screens/RegisterScreen'
import Button from './app/assets/Components/Button'

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


export default function App() {
const [imageUri, setImageUri] = useState();

 const requestPermission = async () => {
  const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
if (!granted) alert("You need to enable permission to access the library.");

}

 useEffect(() => {
requestPermission();
 }, [])
 
const selectImage = async () => {
  try {
    const result = await ImagePicker.launchImageLibraryAsync();
   if (!result.cancelled)
   setImageUri(result.uri);
  } catch (error) {
    console.log("Error reading a image", error)
  }
}

  return (
    <Screen>
      <Button title="Select image" onPress={selectImage}/>
      <Image source={{uri: imageUri }} style={{width: 400, height: 800}}/>
    </Screen>
  );

}

