import { Platform } from "react-native";
import Colors from "./Colors/Colors";

export default {
  Colors,
  text: {
    color: Colors.darkGrey,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  
  },
};
