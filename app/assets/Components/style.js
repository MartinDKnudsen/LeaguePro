import { StyleSheet } from "react-native";

export const customStyle = StyleSheet.create({
  TextForApp: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
    alignSelf: "center",
    
  },
});
