import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import Colors from "../config/Colors/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import * as ImagePicker from 'expo-image-picker'



export default function ImageInput({imageUri, onChangeImage}) {
useEffect(() => {requestPermission()}, []);

 const requestPermission = async () => {
   const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
   if (!granted) alert("You need to enable permission to access the library.");
 };

const handlePress = () => {
if(!imageUri) selectImage();
else Alert.alert('Delete', 'Are you sure you want to delete this image?',
[
  { text: "Yes", onPress:() => onChangeImage(null)},
  {text: "No"}
]
)
}
const selectImage = async () => {
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5
    });
   if (!result.cancelled)
   onChangeImage(result.uri);
  } catch (error) {
    console.log("Error reading a image", error)
  }
}

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={30}
            color={Colors.Black}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.lightGrey,
    borderRadius: 15,
    height: 80,
    justifyContent: 'center',
    width: 80,
    overflow: "hidden"
  },
  image: 
  {
width: "100%",
height: "100%"

  }
});
