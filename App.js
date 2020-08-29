import React, { useState } from "react";
import WelcomeScreen from "./app/assets/screens/FrontPageScreen";
import ListingDetailsScreen from "./app/assets/screens/ListingDetailsScreen";
import MessagesScreen from "./app/assets/screens/MessagesScreen";
import Screen from "./app/assets/Components/Screen";
import Icon from "./app/assets/Components/icon";
import Messages from "./app/assets/Components/Messages";
import AccountScreen from "./app/assets/screens/AccountScreen";
import ListingChampsScreen from "./app/assets/screens/ListingChampsScreen";
import { TextInput, Text, Switch } from "react-native";
import AppTextInput from "./app/assets/Components/TextInput";
import AppPicker from "./app/assets/Components/Picker";
import AppText from "./app/assets/Components/Text";
import LoginScreen from "./app/assets/screens/LoginScreen";
import AppButton from "./app/assets/Components/Button";
import RegisterScreen from './app/assets/screens/RegisterScreen'

export default function App() {
  return <MessagesScreen/>;
}

