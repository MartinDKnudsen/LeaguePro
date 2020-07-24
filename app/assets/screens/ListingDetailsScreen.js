import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import AppText from '../Components/AppText'

export default function ListingDetailsScreen() {
    return (
        <SafeAreaView>
            <Image style={styles.image} source={require('../DataDragon/ChampImg/loading/Aatrox_0.jpg')}/>
            <View style={styles.detailsContainer}></View> 
            <AppText style={styles.title}>Aatrox</AppText> 
            <AppText>- The Darkin Blade</AppText> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
detailsContainer:{
padding: 5

},
    image: {
            width: '100%',
            height: 650,
            alignSelf: 'center',
    
},
title: {

  fontSize: 24,

}

})
