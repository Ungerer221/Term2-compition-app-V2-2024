import { View, Text, StyleSheet, ScrollView, Animated, PanResponder, Modal, Pressable, } from 'react-native'
import React, { useState } from 'react';
// views
import TopNavBar from '../views/topNavBar';
import TotalScoreBar from '../views/totalScoreBar';

import FarmPlantSelectBar from '../views/farmPlantSelectBar';
import Home05Icon from '../icons/HomeIcon';
import DashedLine02Icon from '../icons/dashed-line-02-stroke-rounded';

export default function GameScreen() {
    const [modalVisible, setModalVisible] = useState(false);
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
                                    <View style={styles.plantSelect}></View>
                                    <View style={styles.plantSelect}></View>
                                    <View style={styles.plantSelect}></View>
                                    <View style={styles.plantSelect}></View>
                                    <View style={styles.plantSelect}></View>
                                    <View style={styles.plantSelect}></View>
                                </View>

                                {/* close button */}
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        padding: 20,
        // backgroundColor: 'red',
    },
    plantSelect: {
        width: 54,
        height: 54,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
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
        color:'#fff',
    },
    modalText:{
        fontSize: 16,
        fontWeight: '700',
    }
});