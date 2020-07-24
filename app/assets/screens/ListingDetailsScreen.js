import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import AppText from '../Components/AppText'
import ListCounters from '../Components/ListCounters'
import Colors from '../Colors/Colors'
export default function ListingDetailsScreen() {
    return (
      <ImageBackground style={styles.Background}>
        <SafeAreaView>
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
        </SafeAreaView>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
detailsContainer:{
padding: 5

},
    image: {
            width: '100%',
            height: 500,
            alignSelf: 'center',
            marginTop: 30
    
},
Background: {

backgroundColor: Colors.Black,
width: '100%',
height: '100%'

},
title: {

  fontSize: 30,
    fontWeight: 'bold',
    color: Colors.WhiteColor
        
    },
 subTitle:{
     marginLeft: 30,
fontSize: 20,
        color: Colors.WhiteColor
    },
    userContainer: {
marginVertical: 10

    }
})
