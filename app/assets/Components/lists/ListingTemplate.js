import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "../Text";
import Colors from "../../config/Colors/Colors";

export default function ListingTemplate({
  title,
  subTitle,
  image,
  IconComponent,
}) {
  return (
    <View style={styles.container}>
      {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        {subTitle && <AppText style={styles.subTitle}> {subTitle}</AppText>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: Colors.WhiteColor,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: Colors.medium,
    fontSize: 15,
    fontWeight: "100",
    lineHeight: Platform.OS === "android" ? 15 : 18,
    textAlign: "justify",
  },
  title: {
    lineHeight: Platform.OS === "android" ? 30 : 40,
    color: Colors.Black,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "justify",
    marginTop: 1,
  },
});
