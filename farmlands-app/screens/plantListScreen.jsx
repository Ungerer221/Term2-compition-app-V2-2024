import { View, Text, StyleSheet, Pressable, } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { getMyBucketList } from '../services/plantDbService';

export default function PlantListScreen({ navigation }) {

    const goToAdd = () => { navigation.navigate("Admin") }

    const [bucketItems, setBucketItems] = useState([]) // creating a usestate

    const handleGettingOfData = async () => {
        var allData = await getMyBucketList()
        // check other consol log in Dbservice above the return
        console.log("All Data: " + allData) 
        setBucketItems(allData) // set bucket items tot alldata
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.addButton} onPress={goToAdd}>
                <Text style={styles.addButtonText}>Add</Text>
                <Entypo name="bucket" size={16} color="green" />
            </Pressable>

            {/* this is the card element */}
           

            <Text>PlantListScreen</Text>
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
        padding: 20,
    },
    card: {
        width: '100%',
        backgroundColor: 'white',
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addButton: {
        backgroundColor: 'white',
        borderColor: 'green',
        borderWidth: 2,
        padding: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    addButtonText: {
        textAlign: 'center',
        color: 'green',
        fontWeight: 'bold'
    },
})