import { View, Text, Image, StyleSheet, Button, Modal, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
//  Icons
import { Feather } from '@expo/vector-icons';
import MenuSquareIcon from '../icons/menuSquareIcon';
import DashedLine02Icon from '../icons/dashed-line-02-stroke-rounded';
//  the tab navigation import
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Screen Imports
import HomeScreen from '../screens/homeScreen';

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

export default function TopNavBar({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            {/* <View style={styles.homeIconBlock}>
                <Feather name="home" size={32} color="black" />
            </View> */}
            <View style={styles.homeIconBlock}>
                <Text style={styles.nameText}>FarmLands</Text>
            </View>
            <View style={styles.menuIconBlock}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Menu</Text>
                            <View style={styles.modalContentCon}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                onPress={() => navigation.navigate('Home')}
                                >
                                    <Text style={styles.closeBtnText}>Home : doesnt work</Text>
                                </Pressable>
                            </View>

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
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                    {/* <Text style={styles.textStyle}>Show Modal</Text> */}
                    <MenuSquareIcon />
                </Pressable>

            </View>
            {/* <Button title="Go to Game" onPress={() => navigation.navigate('Game')} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        // height:50,
        // padding: 20,
        // backgroundColor: '#fff',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    homeIconBlock: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#29C3CB',
        // padding: 10,
        paddingLeft: 20,
        borderBottomRightRadius: 12,
    },
    nameText: {
        fontSize: 32,
        fontWeight: '700',
    },
    menuIconBlock: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#29C3CB',
        padding: 10,
        borderBottomLeftRadius: 12,
    },
    icon32: {
        width: 32,
        height: 32,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 95,
        position: 'relative',
        right: -22,
    },
    modalView: {
        margin: 20,
        width: '70%',
        height: '100%',
        backgroundColor: 'white',
        // borderRadius: 20,
        borderTopLeftRadius: 22,
        // borderTopRightRadius:22,
        padding: 35,
        gap: 10,
        alignItems: 'center',
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
    modalText: {
        fontSize: 24,
        fontWeight: '700',
    }
});