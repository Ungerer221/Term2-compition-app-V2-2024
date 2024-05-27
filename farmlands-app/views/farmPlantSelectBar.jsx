import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FarmPlantSelectBar() {
    return (
        <View style={styles.container}>
            {/* plant container */}
            <View style={styles.plantcontainer}>
                {/* // todo : consider makin these components that populate the area */}
                <View style={styles.plantSelect}></View>
                <View style={styles.plantSelect}></View>
                <View style={styles.plantSelect}></View>
                <View style={styles.plantSelect}></View>
                <View style={styles.plantSelect}></View>
                <View style={styles.plantSelect}></View>
                <View style={styles.plantSelect}></View>
                <View style={styles.plantSelect}></View>
                <View style={styles.plantSelect}></View>
                <View style={styles.plantSelect}></View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        height: 180,
        // backgroundColor: 'purple',
        backgroundColor:'#FFD166',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 20,
        // padding:20,
        borderTopLeftRadius:32,
        borderTopRightRadius:32,
    },
    plantcontainer: {
        width: '100%',
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
    }
});