import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { deletePlant, deletePlantItem, getPlantItem, updatePlantItem } from '../services/plantDbService'
//  Icons
import { Feather } from '@expo/vector-icons';
import MenuSquareIcon from '../icons/menuSquareIcon';
import DashedLine02Icon from '../icons/dashed-line-02-stroke-rounded';
import { Firestore, doc, getFirestore } from '@firebase/firestore';

export default function PlantDetailsScreen({ route, navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

    const [plantItem, setPlantItem] = useState([]) // creating a usestate
    const [itemId, setItemId] = useState()
    const [itemName, setItemName] = useState()
    const [itemDescription, setItemDescription] = useState()
    const [itemGrowth, setItemGrowth] = useState()

    // * : for Updating in modal
    const [name, setName] = useState()
    const [description, setDescription] = useState()

    useFocusEffect(
        React.useCallback(() => {
            const { itemID, itemName, itemDesc, itemGrowth } = route.params;
            // console.log("Route", itemDesc)
            // Do something when the screen is focused
            handleGettingOfItemData(itemID) // getting the data that is being passed through
            setItemId(itemID)
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

    // useEffect(() => {
    //     const { itemID } = route.params;
    //     handleDelete(itemID)
    // }, [])

    const handleGettingOfItemData = async (itemID) => {
        var itemData = await getPlantItem(itemID)
        // check other consol log in Dbservice above the return
        // console.log("Item Data: " + itemData) 
        setPlantItem(itemData)
    }

    // * : Update
    const handleUpdatingItemData = async (itemID) => {
        var items = { name, description, }
        var success = await updatePlantItem(items)
        if (success) {
            navigation.goBack()
        } else {
            // TODO : validation on why
        }
    }

    // TODO : Delete Item function
    const handleDelete = async (itemID)=> {
        var deleted = await deletePlantItem(itemID)
        if(deleted){
            console.log("item Deleted Successful:" + itemID)
        }else {
            console.error("failed to delete")
        }
    }
    // const handleDelete = async (itemID) => {
    //     var plantData = await deletePlant(itemID)
    //     setPlantItem(plantData)
    //     // deletePlant('YOUR_PLANT_ID');
    // };
    // const handleDelete = (id) => {
    //     // Call the delete function with the document ID to delete
    //     deletePlant(id);
    //   };

    return (
        <View style={styles.container}>
            <View style={styles.textCon}>
                <Text style={styles.textConText}>ID : </Text>
                <View style={styles.textCon02}>
                    <Text style={styles.textConText02}>{itemId}</Text>
                </View>
            </View>
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
                            <View style={styles.modalFormCon}>
                                <TextInput
                                    style={styles.inputField}
                                    placeholder="Plant Name"
                                    onChangeText={newText => setName(newText)}
                                    defaultValue={name}
                                />
                                <TextInput
                                    multiline
                                    numberOfLines={1}
                                    style={styles.inputField}
                                    placeholder="Description of bucket list"
                                    onChangeText={newText => setDescription(newText)}
                                    defaultValue={description}
                                />
                            </View>
                            <TouchableOpacity style={styles.button} onPress={handleUpdatingItemData}>
                                <Text style={styles.buttonText}>Create Plant Item</Text>
                            </TouchableOpacity>
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
                    {/* <MenuSquareIcon /> */}
                    <Text style={styles.updateBtnText}>Update Item</Text>
                </Pressable>
            </View>
            <Pressable
                onPress={handleDelete}
                style={styles.deleteBtn}>
                <Text style={styles.updateBtnText}>Delete</Text>
            </Pressable>
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
        marginTop: 40,
    },
    modalView: {
        width: '95%',
        height: '100%',
        backgroundColor: 'white',
        // borderRadius: 20,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        padding: 35,
        gap: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
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
    modalFormCon: {
        width: '100%',
        gap: 10,
    },
    inputField: {
        padding: 15,
        width: '100%',
        backgroundColor: '#000',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'black',
    },
    deleteBtn: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#F65774',
    }
})