import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import Colors from "../Colors/Colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import appText from "./AppText";

export default function Messages({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={Colors.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <AppText style={styles.title}>
            {title}
            <AppText style={styles.subTitle}>
              {" "}
              {"\n"}
              {subTitle}
            </AppText>{" "}
          </AppText>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 125,
    width: 500,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 35,
    marginRight: 10,
    marginTop: 30,
   marginLeft: 8
  },
  title: {
    marginTop: 50,
    lineHeight: Platform.OS === "android" ? 25 : 20,
    color: Colors.Black,
    fontSize: 25,
    fontWeight: "100",
    padding: 15,
    marginTop: 30,
    marginLeft: -14,
  },
  subTitle: {
    color: Colors.GreyBackGround,
    fontSize: 25,
    fontWeight: "100",
    lineHeight: Platform.OS === "android" ? 25 : 20,
  },
});
