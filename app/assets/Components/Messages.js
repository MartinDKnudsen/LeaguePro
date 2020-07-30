import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "./AppText";
import Colors from "../Colors/Colors";

export default function Messages({ title, subTitle, image }) {
  return (
    <View>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styleForText.title}>
          {title} {"\n"}
          <AppText style={styleForText.subTitle}> {subTitle}</AppText>
         </AppText>
      </View>
    </View>
  );
}

const styleForText = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "baseline",
    backgroundColor: Colors.Black,
  },

  title: {
    lineHeight: 50,
    color: Colors.Black,
    fontSize: 30,
    fontWeight: "100",
  
  },
  subTitle: {
    color: Colors.Black,
    fontSize: 22,
    fontWeight: "100",
    lineHeight: Platform.OS === "android" ? 25 : 20,
   
  },
});

const styles = StyleSheet.create({

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
    marginTop: 30,
  },
});
