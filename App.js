import React, { useState, useEffect} from "react";
import WelcomeScreen from "./app/assets/screens/FrontPageScreen";
import ListingDetailsScreen from "./app/assets/screens/ListingDetailsScreen";
import MessagesScreen from "./app/assets/screens/MessagesScreen";
import Screen from "./app/assets/Components/Screen";
import Icon from "./app/assets/Components/icon";
import Messages from "./app/assets/Components/Messages";
import AccountScreen from "./app/assets/screens/AccountScreen";
import ListingChampsScreen from "./app/assets/screens/ListingChampsScreen";
import { TextInput, Text, Switch, Image} from "react-native";
import AppTextInput from "./app/assets/Components/TextInput";
import AppPicker from "./app/assets/Components/Picker";
import AppText from "./app/assets/Components/Text";
import LoginScreen from "./app/assets/screens/LoginScreen";
import AppButton from "./app/assets/Components/Button";
import RegisterScreen from './app/assets/screens/RegisterScreen'

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import ImageInput from './app/assets/Components/ImageInput'
import Button from './app/assets/Components/Button'
import ImageInputList from "./app/assets/Components/lists/ImageInputList";

export default function App() {
const [imageUris, setImageUris] = useState([]);

const handleAdd = (uri) => {
setImageUris([...imageUris, uri]);
}
const handleRemove = (uri) => {
setImageUris(imageUris.filter(imageUris => imageUris != uri))

}

  return (
    <Screen>
    <ImageInputList
      imageURis={imageUris}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}
    />
    </Screen>
  );

}

