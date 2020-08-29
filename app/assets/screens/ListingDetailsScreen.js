import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons/";

import AppText from '../Components/Text'
import ListCounters from '../Components/lists/ListCounters'
import Colors from '../config/Colors/Colors'
import Screen from "../Components/Screen";

export default function ListingDetailsScreen({hero, heroTitle, heroImage}) {
    return (
      <Screen>
      
          <Image
            style={styles.image}
            source={require("../DataDragon/ChampImg/loading/Aatrox_0.jpg")}
          />
          <View style={styles.detailsContainer}></View>
          <AppText style={styles.title}> Aatrox</AppText>
          <AppText style={styles.subTitle}>-The Darkin Blade</AppText>
          <View style={styles.userContainer}>
            <ListCounters
              image={require("../DataDragon/ChampImg/tiles/Teemo_0.jpg")}
              title="Teemo"
              subTitle="The Swift Scout"
            />
          </View>
          <MaterialCommunityIcons
            name="arrow-left-thick"
            style={IconStyles.arrowIcon}
            size={40}
          />
        
      </Screen>
    );
}

const IconStyles = StyleSheet.create({
arrowIcon: {

    position: "absolute",
    top:  Platform.OS === "android" ? 40 : 50,
    left: 10,
    color: Colors.WhiteColor
  }
})

const styles = StyleSheet.create({
  detailsContainer: {
    margin: -50,
    color: Colors.Black,
  },
  //Adjustment for the champ image
  image: {
    width: "100%",
    height: Platform.OS === "android" ? 500 : 600,
    alignSelf: "center",
    marginTop: Platform.OS === "android" ? -20 : -45,
    justifyContent: "center"
  },

  backIcon: {
    top: 40,
    left: 30,
    color: Colors.WhiteColor,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.WhiteColor,
  },
  subTitle: {
    marginLeft: 30,
    fontSize: 20,
    color: Colors.WhiteColor,
  },
  userContainer: {
    marginVertical: 10,
  },
});
