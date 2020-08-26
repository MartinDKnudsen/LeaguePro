import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import Colors from "../config/Colors/Colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Messages({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={Colors.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          {image && <Image style={styles.image} source={image} />}
          <AppText style={styles.title} numberOfLines={2}>
            {title}
            <AppText style={styles.subTitle} numberOfLines={2}>
              {" "}
              {"\n"}
              {subTitle}
            </AppText>{" "}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color={Colors.medium}
            style={styles.icon}
          />
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
  icon: {flex: 1, marginLeft: 200, marginTop: 50 },
  placeholder: {
    color: Colors.medium,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 35,
    marginRight: 10,
    marginTop: 30,
    marginLeft: 8,
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
    fontSize: 15,
    fontWeight: "100",
    lineHeight: Platform.OS === "android" ? 25 : 20,
  },
});
