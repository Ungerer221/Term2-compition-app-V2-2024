import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getPlantItem } from '../services/plantDbService'
//  Icons
import { Feather } from '@expo/vector-icons';
import MenuSquareIcon from '../icons/menuSquareIcon';
import DashedLine02Icon from '../icons/dashed-line-02-stroke-rounded';

export default function PlantDetailsScreen({ route, navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

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
        <View style={styles.container}>
            <View style={styles.textCon}>
                <Text style={styles.textConText}>Name : </Text>
                <View style={styles.textCon02}>
                    <Text style={styles.textConText02}>{itemName}</Text>
                </View>
            </View>
            <View style={styles.textCon}>
                <Text style={styles.textConText}>Description Here: </Text>
                <View style={styles.textCon02}>
                    <Text style={styles.textConText02}>{itemDescription}</Text>
                </View>
            </View>
            <View style={styles.textCon}>
                <Text style={styles.textConText}>Growth Time: </Text>
                <View style={styles.textCon02}>
                    <Text style={styles.textConText02}>{itemGrowth}</Text>
                </View>
            </View>

            {/* 
            // TODO : Update Funciotnality 
            // 1. Could use a modal with inputs to change the value 
            // 2. could hide the input and when update is pressed it reveals the inputs and hides the data 
            */}
            <View>
                {/* <Text style={styles.updateBtnText}>Update Item</Text> */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        {/* modal view */}
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Update</Text>
                            {/* close button */}
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.closeBtnText}>Hide Menu</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.updateBtn, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                    {/* <Text style={styles.textStyle}>Show Modal</Text> */}
                    <MenuSquareIcon />
                    <Text style={styles.updateBtnText}>Update Item</Text>
                </Pressable>
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
        gap: 10,
    },
    textCon: {
        padding: 10,
        width: '100%',
        backgroundColor: '#eaeaea',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textConText: {
        fontSize: 16,
    },
    textCon02: {
        backgroundColor: '#F65774',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 12,
    },
    textConText02: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    updateBtn: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#A08BF6',
        borderRadius: 12,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    updateBtnText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: '20',
    },
    centeredView: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:40,
    },
    modalView: {
        marginTop: 40,
        width: '95%',
        height: '100%',
        backgroundColor: 'white',
        // borderRadius: 20,
        borderTopLeftRadius: 22,
        borderTopRightRadius:22,
        padding: 35,
        gap: 10,
        alignItems: 'center',
        justifyContent:'flex-start',
        borderWidth: 2,

        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
    },
    buttonClose: {
        padding: 20,
        backgroundColor: '#F65774',
        borderRadius: 24,
    },
    closeBtnText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
    },
})