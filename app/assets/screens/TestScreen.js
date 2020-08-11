import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ListingTemplate from '../Components/ListingTemplate'

export default function TestScreen() {
    return (
        <View>
           <ListingTemplate
               image={require("../DataDragon/ChampImg/tiles/Anivia_0.jpg")}
               title="Anivia"
               subTitle= "Fat Bird"
           />
        </View>
    )
}

const styles = StyleSheet.create({})
