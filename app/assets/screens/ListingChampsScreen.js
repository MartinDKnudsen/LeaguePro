import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Screen from "../Components/Screen";
import Card from "../Components/Card"
import Colors from "../config/Colors/Colors";
const champs = [
  {
    id: 1,
    title: "Aatrox",
    sTitle: "The Darkin Blade",
    image: require("../DataDragon/ChampImg/loading/Aatrox_0.jpg"),
  },
  {
    id: 2,
    title: "Anivia",
    sTitle: "The Frost Bird",
    image: require("../DataDragon/ChampImg/loading/Anivia_0.jpg"),
  },
  {
    id: 3,
    title: "Alistar",
    sTitle: "The Minotaur",
    image: require("../DataDragon/ChampImg/loading/Alistar_0.jpg"),
  },
];

export default function ListingChampsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={champs}
        keyExtractor={(champs) => champs.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subTitle={item.sTitle} image={item.image} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

screen: 
{
    padding: 20,
    backgroundColor: Colors.lightGrey
}


});
