import { View, Text, StyleSheet, Pressable, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getAllCompsList } from '../services/compDbService'
// icons
import AddCircleHalfDotIcon from '../icons/add-circle-half-dot-stroke-rounded'
import Menu01IconList from '../icons/menu-01-stroke-rounded'
import CircleArrowRight02Icon from '../icons/circle-arrow-right-02-stroke-rounded'

export default function CompListScreen({ navigation }) {

    const goToAdd = () => { navigation.navigate("CompAdd") }

    const [compItems, setCompItems] = useState([])

    // ? what is a call back
    // https://reactnavigation.org/docs/navigation-lifecycle/
    useFocusEffect(
        React.useCallback(() => {
            // Do something when the screen is focused
            handleGettingOfCompData()
            return () => {
                // Do something when the screen is unfocused
                // Useful for cleanup functions
                // DO NOTHING
            }
        })
    )

    const handleGettingOfCompData = async () => {
        var allCompData = await getAllCompsList()
        setCompItems(allCompData)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.container02}>
                    <View style={styles.infoCon}>
                        <Text style={styles.titleText01}>Competition List</Text>
                        <Menu01IconList />
                    </View>
                    {/* <Pressable style={styles.addButton} onPress={goToAdd}> */}
                    {/* <Text style={styles.addButtonText}>Add</Text> */}
                    {/* <AddCircleHalfDotIcon /> */}
                    {/* </Pressable> */}
                    <View style={styles.leaderboardillSection}>
                        <View style={styles.leaderboardillSectionblock03}>
                            <Text style={styles.cardConInfoText}>3</Text>
                        </View>
                        <Image
                            style={styles.learboardimage}
                            source={require('../assets/leaderboardimage.png')}
                        />
                        <View style={styles.leaderboardillSectionblock02}>
                            <Text style={styles.cardConInfoText}>2</Text>
                        </View>
                    </View>
                    {/* this is the card element */}
                    <View style={styles.cardCon}>
                        <View >
                            <Text style={styles.cardConInfoText}>Current Compitions</Text>
                        </View>
                        {
                            // just so that if there is empty data it doesnt bug out
                            // first check if items is empty - if not empty then display map - empty then display text
                            compItems != [] ? (
                                compItems.map((item, index) => (

                                    <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate("CompDetail",
                                        {
                                            itemID: item?.id, // here we are passing the data to the details page
                                            itemName: item?.name,
                                            itemDesc: item?.description, // here we are passing the data to the details page
                                            itemEndDay: item?.endDay,
                                            itemEndMonth: item?.endMonth,
                                            itemEndYear: item?.endYear,
                                        }
                                    )}>
                                        <Text>{item.name}</Text>
                                        <CircleArrowRight02Icon/>
                                        {/* // when the item is a priority the star must show - with if statement */}
                                        {/* {item.priority ? <AntDesign name="star" size={24} color="orange" /> : null} */}
                                    </TouchableOpacity>
                                ))
                            ) : (
                                <Text>no items found</Text>
                            )
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        // backgroundColor:'gray',

    },
    container02: {
        marginTop: 50,
        height: '100%',
        minHeight: 800,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
    },
    cardCon: {
        width: '100%',
        padding: 10,
        gap: 10,
        borderRadius: 12,
        borderWidth: 2,
        backgroundColor:'#ECECEC',
    },
    card: {
        width: '100%',
        // backgroundColor: '#F65774',
        backgroundColor:'#fff',
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 12,
        borderWidth: 2,

    },
    addButton: {
        width: '100%',
        borderRadius: 22,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#9CCCFF'
    },
    addButtonText: {
        fontSize: 24,
    },
    infoCon: {
        width: '100%',
        padding: 20,
        borderRadius: 12,
        borderWidth: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#EF617B'
    },
    titleText01: {
        fontSize: 24,
        fontWeight: '900',
        width: 200,
    },
    cardConInfoText: {
        fontSize: 24,
        fontWeight: '700',
    },
    learboardimage: {
        width: 150,
        height: 150,
    },
    leaderboardillSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',

    },
    leaderboardillSectionblock03: {
        width: 100,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EF617B',
        borderRadius: 22,
    },
    leaderboardillSectionblock02: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#61CDEF',
        borderRadius: 22,
    }
})