import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../config/Colors/Colors";
import defaultStyles from '../config/styles';
import AppText from "./AppText";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={Colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: { alignSelf: "center", marginRight: 10 },

});
