import React from "react";
import { StyleSheet, Text, View, FlatList} from "react-native";
import Messages from "../Components/Messages";
import Screen from '../Components/Screen';
import Seperator from '../Components/Separator'
import AppText from "../Components/AppText";
import SavedChampsDeleteAction from "../Components/SavedChampsDeleteAction";
import Colors from "../Colors/Colors";
 
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
    image: require("../DataDragon/ChampImg/tiles/Alistar_0.jpg"),
  },
];

export default function MessagesScreen() {
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
            renderRightActions={SavedChampsDeleteAction}
          />
        )}
        ItemSeparatorComponent={Seperator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

});
