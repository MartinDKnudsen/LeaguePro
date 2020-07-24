import React from "react";
import { StyleSheet, Text, View, Image,  } from "react-native";
import AppText from "./AppText";
import Colors from "../Colors/Colors";

export default function ListCounter({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styleForText.container}>
      <AppText style={styleForText.counterText}>Counters</AppText>
        <AppText style={styleForText.title}>{title}<AppText style={styleForText.subTitle}> -{subTitle}</AppText> </AppText>
      </View>
    </View>
  );
}

const styleForText = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'baseline'
  },
  counterText: {
    marginRight: 30,
    lineHeight: 30,
    fontSize: 20,
    textDecorationLine: "underline",
    color: Colors.WhiteColor,
  },
  title: {
    lineHeight: 50,
    color: Colors.WhiteColor,
    fontSize: 30,
    fontWeight: "100",
  },
  subTitle: {
      
    color: Colors.WhiteColor,
    fontSize: 15,
    fontWeight: "100",
  },
});


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    resizeMode: "contain",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
    marginTop: 30,
  }
});
