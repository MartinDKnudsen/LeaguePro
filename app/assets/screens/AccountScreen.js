import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Screen from "../Components/Screen";
import ListingTemplate from "../Components/ListingTemplate";
import Colors from "../config/Colors/Colors";
import Icon from "../Components/icon";
import Separator from "../Components/Separator";

const menuItems = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: Colors.loginButton,
    },
  },
  {
    title: "My messages",
    icon: {
      name: "email",
      backgroundColor: Colors.ContinueWithoutButton,
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListingTemplate
          title="Martin Knudsen"
          subTitle="martinknu22@gmail.com"
          image={require("../DataDragon/ChampImg/tiles/Bard_8.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <ListingTemplate
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <ListingTemplate
title= "Log Out"
IconComponent={<Icon name= "logout" backgroundColor="#ffe66d"/>}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
      backgroundColor: Colors.lightGrey,
  },
  container: {
    marginVertical: 20,
  },
});
