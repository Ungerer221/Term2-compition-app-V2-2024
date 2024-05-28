import { View, Text, StyleSheet, Pressable, TouchableOpacity, FlatList, } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { getAllPlantsList, getMyBucketList } from '../services/plantDbService';

export default function PlantListScreen({ navigation }) {

    const goToAdd = () => { navigation.navigate("Admin") }

    const [plantItems, setPlantItems] = useState([]) // creating a usestate

    useFocusEffect(
        React.useCallback(() => {
            // Do something when the screen is focused
            handleGettingOfData()
            return () => {
                // Do something when the screen is unfocused
                // Useful for cleanup functions
                // DO NOTHING
            };
        }, [])
    );

    const handleGettingOfData = async () => {
        var allData = await getAllPlantsList()
        // check other consol log in Dbservice above the return
        // console.log("All Data: " + allData) 
        setPlantItems(allData) // set bucket items tot alldata
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.addButton} onPress={goToAdd}>
                <Text style={styles.addButtonText}>Add</Text>
                <Entypo name="bucket" size={16} color="green" />
            </Pressable>

            {/* this is the card element */}
            <View style={styles.cardCon}>
                {
                    // just so that if there is empty data it doesnt bug out
                    // first check if items is empty - if not empty then display map - empty then display text
                    plantItems != [] ? (
                        plantItems.map((item, index) => (

                            <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate("PlantDetail",
                                {
                                    itemID: item?.id, // here we are passing the data to the details page
                                    itemName: item?.name,
                                    itemDesc: item?.description, // here we are passing the data to the details page
                                    itemGrowth: item?.growthTime,
                                }
                            )}>
                                <Text>{item.name}</Text>
                                {/* // when the item is a priority the star must show - with if statement */}
                                {item.priority ? <AntDesign name="star" size={24} color="orange" /> : null}
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text>no items found</Text>
                    )
                }
            </View>
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
        gap: 20,
    },
    cardCon: {
        width:'100%',
        padding:10,
        gap:10,
        borderRadius: 12,
        borderWidth: 2,
    },
    card: {
        width: '100%',
        // backgroundColor: '#F65774',
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 12,
        borderWidth: 2,

    },
    addButton: {
        width:'100%',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius:12,
        padding: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    addButtonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    },
})