import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getPlantItem } from '../services/plantDbService'

export default function PlantDetailsScreen({ route, navigation }) {

    const [plantItem, setPlantItem] = useState([]) // creating a usestate
    const [itemName, setItemName] = useState()
    const [itemDescription, setItemDescription] = useState()
    const [itemGrowth, setItemGrowth] = useState()

    useFocusEffect(
        React.useCallback(() => {
            const { itemID, itemName, itemDesc, itemGrowth } = route.params;
            // console.log("Route", itemDesc)
            // Do something when the screen is focused
            handleGettingOfItemData(itemID) // getting the data that is being passed through
            setItemName(itemName)
            setItemDescription(itemDesc) // getting the data that is being passed through
            setItemGrowth(itemGrowth) // getting the data that is being passed through

            return () => {
                // Do something when the screen is unfocused
                // Useful for cleanup functions
                // DO NOTHING
            };
        }, [])
    );

    const handleGettingOfItemData = async (itemID) => {
        var itemData = await getPlantItem(itemID)
        // check other consol log in Dbservice above the return
        // console.log("Item Data: " + itemData) 
        setPlantItem(itemData)
    }

    return (
        <View>
            <Text>Name : {itemName}</Text>
            <Text>Description Here: {itemDescription}</Text>
            <Text>Growth Time: {itemGrowth}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        // backgroundColor:'gray',
        gap: 10,
    },
})