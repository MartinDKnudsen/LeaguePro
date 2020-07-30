import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView} from "react-native";
import ListCounter from "../Components/ListCounters";
import Messages from "../Components/Messages";
import Constants from 'expo-constants';

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../DataDragon/ChampImg/tiles/Ahri_0.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../DataDragon/ChampImg/tiles/Ahri_0.jpg"),
  },
];

export default function MessagesScreen() {
  return (

    <SafeAreaView style= {styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <Messages
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );


}

const styles = StyleSheet.create({

screen: {
paddingTop: Constants.statusBarHeight

}



});
