import { StyleSheet } from "react-native";

//Not useing? 

export const customStyle = StyleSheet.create({
  TextForApp: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
    alignSelf: "center",
  },
});
