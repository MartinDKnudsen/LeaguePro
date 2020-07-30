import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/assets/screens/FrontPageScreen'
import Colors from './app/assets/Colors/Colors'
import Card from './app/assets/Components/Card'
import ListingDetailsScreen from './app/assets/screens/ListingDetailsScreen'
import MessagesScreen from './app/assets/screens/MessagesScreen';


export default function App() {
  return  <MessagesScreen/>

}
