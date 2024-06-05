import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { deletePlant, deletePlantItem, getPlantItem, updatePlantItem } from '../services/plantDbService'
import { deleteCompItem, getCompItem } from '../services/compDbService';
import Sun01Icon from '../icons/sun-01-stroke-rounded';
import Delete02IconW from '../icons/delete-02-stroke-roundedW';


export default function CompDetailsScreen({ route, navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

    const [compItem, setCompItem] = useState([])
    const [itemId, setItemId] = useState()
    const [itemName, setItemName] = useState()
    const [itemDescription, setItemDescription] = useState()
    const [itemEndDay, setItemEndDay] = useState()
    const [itemEndMonth, setItemEndMonth] = useState()
    const [itemEndYear, setItemEndYear] = useState()


    useFocusEffect(
        React.useCallback(() => {
            const { itemID, itemName, itemDesc, itemEndDay, itemEndMonth, itemEndYear, } = route.params;

            // handleGettingCompItemData(itemID)
            setItemId(itemID)
            setItemName(itemName)
            setItemDescription(itemDesc)
            setItemEndDay(itemEndDay)
            setItemEndMonth(itemEndMonth)
            setItemEndYear(itemEndYear)
        })
    )

    // ! these dont do anything 
    // get item data : getting from scratch // TODO : Check this if it is nessecery and if its working
    // const handleGettingCompItemData = async (itemID) => {
    //     var itemData = await getCompItem(itemID)
    //     setCompItem(itemData)
    // }

    // const handleDeleteCompItem = async (itemID)=>{
    //     var itemData = await deleteCompItem(itemID)
    //     setCompItem(itemData)
    // }

    return (
        <View style={styles.container}>
            <View style={styles.container02}>
                <View style={styles.infoCon}>
                    <Text style={styles.titleText01}>Item Details</Text>
                    <Sun01Icon />
                </View>
                {/* card view */}
                <View style={styles.enrollCard}>
                    <View style={styles.enrollCardTitleRow}>
                        <View style={styles.enrollCardTitleCon}>
                            <Text style={styles.enrollCardTitle}>{itemName}</Text>
                            <Text style={styles.enrollText03}>(1/7)</Text>
                        </View>
                        <Sun01Icon />
                    </View>
                    <Text>Description : {itemDescription}</Text>
                    <View style={styles.enrollDateMainContainer}>
                        <Text style={styles.enrollText03}>End Date:</Text>
                        <View style={styles.enrollCardDateCon}>
                            <View style={styles.enrollCardDateBlock}>
                                <Text style={styles.enrollText02}>{itemEndDay}</Text>
                            </View>
                            <Text style={styles.enrollText02}>:</Text>
                            <View style={styles.enrollCardDateBlock}>
                                <Text style={styles.enrollText02}>{itemEndMonth}</Text>
                            </View>
                            <Text style={styles.enrollText02}>:</Text>
                            <View style={styles.enrollCardDateBlock}>
                                <Text style={styles.enrollText02}>{itemEndYear}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.enrollBtn}>
                            <Text style={styles.enrollBtnText}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.deleteButton}
                    // onPress={handleDeleteCompItem}
                >
                    {/* <Text>Delete</Text> */}
                    <Delete02IconW />
                </TouchableOpacity>

            </View>
            <Text>CompDetailsScreen:{itemName}</Text>
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
    container02: {
        width: '100%',
        height: '100%',
        padding: 10,
        borderWidth: 2,
        borderRadius: 22,
        gap: 20,
    },
    infoCon: {
        width: '100%',
        padding: 20,
        borderRadius: 12,
        borderWidth: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    titleText01: {
        fontSize: 24,
        fontWeight: '900',
        width: 200,
    },
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
        borderWidth: 2,
    },
    enrollBtnText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        textTransform: 'capitalize',
    },
    deleteButton: {
        backgroundColor: '#F46987',
        padding: 20,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})