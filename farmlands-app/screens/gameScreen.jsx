import { View, Text, StyleSheet, ScrollView, Animated, PanResponder, Modal, Pressable, TouchableOpacity, Alert, } from 'react-native'
import React, { useEffect, useState } from 'react';
// views
import TopNavBar from '../views/topNavBar';
import TotalScoreBar from '../views/totalScoreBar';

import FarmPlantSelectBar from '../views/farmPlantSelectBar';
import Home05Icon from '../icons/HomeIcon';
import DashedLine02Icon from '../icons/dashed-line-02-stroke-rounded';
import { getAllPlantsList } from '../services/plantDbService';
import { useFocusEffect } from '@react-navigation/native';

export default function GameScreen() {

    const [modalVisible, setModalVisible] = useState(false);

    const [plantItems, setPlantItems] = useState([]);

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

    // plant and planting mechanic Idea from chat 

    const [plants, setPlants] = useState([]);
    const [userScore, setUserScore] = useState(0);
    const [selectedPlant, setSelectedPlant] = useState(null);

    // ?
    // The plantData constant is an array of objects representing different types of plants that can be planted in the app. Each object in the array represents a plant and contains three properties:

    // name: This property stores the name or identifier of the plant.
    // growthTime: This property represents the time it takes for the plant to grow and become ready for harvest, measured in seconds.
    // scoreAmount: This property indicates the score amount that the user will receive when they harvest this particular plant.
    const plantData = [
        { name: 'Plant A', growthTime: 3600, scoreAmount: 10 }, // Growth time in seconds
        // Add more plant data as needed
    ];

    // ?
    const plant = (plantName) => {
        const timestamp = Date.now();
        setPlants([...plantItems, { name: plantName, timestamp }]);
    };

    // ?
    useEffect(() => {
        // Calculate growth and update plant status
        plants.forEach((plant) => {
            const timePassed = (Date.now() - plant.timestamp) / 1000; // Convert to seconds
            if (timePassed >= plantData.find((p) => p.name === plant.name).growthTime) {
                // Plant is ready for harvest
                // You can mark it as such or display a visual indicator
            }
        });
    }, [plants]);


    // ?
    const harvest = (plantName) => {
        const plant = plants.find((p) => p.name === plantName);
        const plantDataEntry = plantData.find((p) => p.name === plantName);
        const timePassed = (Date.now() - plant.timestamp) / 1000; // Convert to seconds
        if (timePassed >= plantDataEntry.growthTime) {
            // Add score amount to user's total score
            setUserScore(userScore + plantDataEntry.scoreAmount);
            // Remove plant from planted plants
            setPlants(plants.filter((p) => p.name !== plantName));
        }
    };

    return (
        <View style={styles.container}>
            <TopNavBar></TopNavBar>
            <View style={styles.gameTopTextContainer}>
                <Text style={styles.gameParagraph}>Your Farm</Text>
                <Text style={styles.gameTitleText}>Farm Name</Text>
            </View>
            <TotalScoreBar />
            {/* this is the essential drop zone */}
            {/* <FarmPlantingSpaceView /> */}
            <View style={styles.plantSpotcontainer}>
                {/* the plant plot */}
                {/* // todo : Make the modal a component that imports the Plants to plant */}
                {/* // todo : could have the modal out side and inport it into the plot as the modal will contain the same information and then select what plant to plant in that spot */}
                {/* when the plant is ready you must be able to press and collect the harvested plant withough it activating the modal */}
                <View style={styles.farmPlantPlot}>
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
                                <Text style={styles.modalText}>Please Select a Plant</Text>
                                <View style={styles.plantcontainer}>
                                    <ScrollView>
                                        {
                                            plantItems != [] ? (
                                                plantItems.map((item, index) => (
                                                    // when we press on the touchable below we waant it to plant the plant on the plot.
                                                    <TouchableOpacity key={index} style={styles.plantSelect} onPress={()=> harvest(plant.name)}> 

                                                        <Text>{item.name}</Text>
                                                    </TouchableOpacity>
                                                ))
                                            ) : (
                                                <Text>No Items Found</Text>
                                            )
                                        }
                                    </ScrollView>
                                </View>

                                {/* close button */}
                                <Pressable
                                    style={[styles.closeButton, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.closeBtnText}>Hide Modal</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}>
                        {/* <Text style={styles.textStyle}>Show Modal</Text> */}
                        <DashedLine02Icon />
                    </Pressable>
                    {/* <Text>1</Text> */}
                </View>
                <View style={styles.farmPlantPlot}>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}>
                        {/* <Text style={styles.textStyle}>Show Modal</Text> */}
                        <DashedLine02Icon />
                    </Pressable>
                </View>
                <View style={styles.farmPlantPlot}>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}>
                        {/* <Text style={styles.textStyle}>Show Modal</Text> */}
                        <DashedLine02Icon />
                    </Pressable>
                </View>
                <View style={styles.farmPlantPlot}>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}>
                        {/* <Text style={styles.textStyle}>Show Modal</Text> */}
                        <DashedLine02Icon />
                    </Pressable>
                </View>
                <View style={styles.farmPlantPlot}>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}>
                        {/* <Text style={styles.textStyle}>Show Modal</Text> */}
                        <DashedLine02Icon />
                    </Pressable>
                </View>
                <View style={styles.farmPlantPlot}>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}>
                        {/* <Text style={styles.textStyle}>Show Modal</Text> */}
                        <DashedLine02Icon />
                    </Pressable>
                </View>
                <View style={styles.farmPlantPlot}>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}>
                        {/* <Text style={styles.textStyle}>Show Modal</Text> */}
                        <DashedLine02Icon />
                    </Pressable>
                </View>
                <View style={styles.farmPlantPlot}>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}>
                        {/* <Text style={styles.textStyle}>Show Modal</Text> */}
                        <DashedLine02Icon />
                    </Pressable>
                </View>
                <View style={styles.farmPlantPlot}>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}>
                        {/* <Text style={styles.textStyle}>Show Modal</Text> */}
                        <DashedLine02Icon />
                    </Pressable>
                </View>
            </View>
            {/* <FarmPlantSelectBar /> */}
            <View style={styles.plantSelectcontainer}>
                {/* plant container */}
                <View style={styles.plantcontainer}>
                    {/* // todo : consider makin these components that populate the area */}
                    {/* dragables */}
                    {/* <View style={styles.plantSelect}></View> */}
                    {/* <Draggable /> */}
                    {/* <View style={styles.plantSelect}></View>
                    <View style={styles.plantSelect}></View>
                    <View style={styles.plantSelect}></View>
                    <View style={styles.plantSelect}></View>
                    <View style={styles.plantSelect}></View>
                    <View style={styles.plantSelect}></View>
                    <View style={styles.plantSelect}></View>
                    <View style={styles.plantSelect}></View>
                    <View style={styles.plantSelect}></View> */}
                    <Text> ! this could show information about selected plants ! </Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // backgroundColor: '#fff',
        backgroundColor: '#90F6DE',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
        paddingTop: 40,
    },
    gameTopTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    gameParagraph: {
        fontSize: 16,
    },
    gameTitleText: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    plantSpotcontainer: {
        flex: 0,
        width: 326,
        height: 344,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 40,
        padding: 20,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'black',
        borderRadius: 44,
    },
    farmPlantPlot: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 68,
        height: 68,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
    },
    plantSelectcontainer: {
        flex: 0,
        width: '100%',
        height: 180,
        // backgroundColor: 'purple',
        backgroundColor: '#FFD166',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 20,
        // padding:20,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    plantcontainer: {
        // width: '100%',
        // width:280,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20,
        // padding: 20,
        // backgroundColor: 'red',
        width: '100%',
    },
    plantSelect: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
        width: 250,
        marginTop: 10,
        // backgroundColor: 'red',

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        gap: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
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
        fontSize: 16,
        fontWeight: '700',
    },
    button: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});