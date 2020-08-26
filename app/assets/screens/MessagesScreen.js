import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Messages from "../Components/Messages";
import Screen from "../Components/Screen";
import Seperator from "../Components/Separator";
import AppText from "../Components/AppText";
import SavedChampsDeleteAction from "../Components/SavedChampsDeleteAction";
import Colors from "../config/Colors/Colors";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description:
      "Hey dude! How do you counter bard? ",
    image: require("../DataDragon/ChampImg/tiles/Ahri_0.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "Plz carry me to diamond",
    image: require("../DataDragon/ChampImg/tiles/Alistar_0.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
    //Delete Champ Here
  };

  return (
    <Screen>
      <AppText> Saved Champs</AppText>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <Messages
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <SavedChampsDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={Seperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
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
              image: require("../DataDragon/ChampImg/tiles/Alistar_0.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

title: 
    {

      
    }
  
});
