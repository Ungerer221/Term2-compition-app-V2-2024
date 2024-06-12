import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Sun01Icon from '../icons/sun-01-stroke-rounded'
import { useFocusEffect } from '@react-navigation/native'
import { addUserToComp, getAllCompsList, getAllSubCompItems } from '../services/compDbService'

export default function EnrollCardView() {

    const [compItems, setCompItems] = useState([])
    const [subEnrolledItems, setSubEnrolledItems] = useState([])

    const [username, setUsername] = useState('');

    useFocusEffect(
        React.useCallback(() => {
            handleGettingOfCompData()
            // handleGettingSubEnrolledData()
            return () => {
                // DO NOTHING
            }
        })
    )

    const handleGettingOfCompData = async () => {
        var allCompData = await getAllCompsList()
        setCompItems(allCompData)
    }

    // getting all subcollection data
    const handleGettingSubEnrolledData = async () => {
        var allEnrolledData = await getAllSubCompItems()
        setSubEnrolledItems(allEnrolledData)
    }

    // TODO: to add the user to the enrolled subCollection similar to adding the user from auth
    const handleSettingEnrollment = async () => {
        // var enrollUserData = { username,}
        addUserToComp()
    }
    const enrollUser = () => { handleSettingEnrollment() }


    return (
        <View style={styles.cardCon}>
            {
                compItems != [] ? (
                    compItems.map((item, index) => (

                        <View style={styles.enrollCard} key={index}>
                            <View style={styles.enrollCardTitleRow}>
                                <View style={styles.enrollCardTitleCon}>
                                    <Text style={styles.enrollCardTitle}>{item.name}</Text>
                                    {/* will be the number of enrolled indeviduals  */}
                                    <Text style={styles.enrollText03}>(0)</Text>
                                </View>
                                <Sun01Icon />
                            </View>
                            <Text>{item.description}</Text>
                            <View style={styles.enrollDateMainContainer}>
                                <Text style={styles.enrollText03}>End Date:</Text>
                                <View style={styles.enrollCardDateCon}>
                                    <View style={styles.enrollCardDateBlock}>
                                        <Text style={styles.enrollText02}>{item.endDay}</Text>
                                    </View>
                                    <Text style={styles.enrollText02}>:</Text>
                                    <View style={styles.enrollCardDateBlock}>
                                        <Text style={styles.enrollText02}>{item.endMonth}</Text>
                                    </View>
                                    <Text style={styles.enrollText02}>:</Text>
                                    <View style={styles.enrollCardDateBlock}>
                                        <Text style={styles.enrollText02}>{item.endYear}</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                {/* // TODO : when pressing this button it will add the user to the enrolled collection in the competition  */}
                                {/* // TODO : check Data routing. The user must be linked to the Competition data */}
                                <TouchableOpacity style={styles.enrollBtn} onPress={enrollUser}>
                                    <Text style={styles.enrollBtnText}>enroll</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                ) : (
                    <Text>no items found</Text>
                )
            }
        </View>
    )
}
const styles = StyleSheet.create({
    enrollCard: {
        // height:50,
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 12,
        marginTop: 10,
        gap: 10,
    },
    enrollCardTitleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    enrollCardTitleCon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    enrollCardTitle: {
        fontSize: 24,
        fontWeight: '700',
    },
    enrollDateMainContainer: {
        gap: 10,
    },
    enrollText02: {
        fontSize: 20,
        fontWeight: '600',
    },
    enrollText03: {
        fontSize: 18,
        fontWeight: '600',
    },
    enrollCardDateCon: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 20,
    },
    enrollCardDateBlock: {
        padding: 15,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 12,
    },
    enrollBtn: {
        backgroundColor: '#A597DE',
        padding: 10,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    enrollBtnText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        textTransform: 'capitalize',
    },
})