import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import WavingHand02Icon48 from '../icons/waving-hand-02-stroke-rounded'

export default function HelloMeetView() {
    return (
        <View style={styles.containter}>
            <View style={styles.containter01}>
                <View style={styles.containter02}>
                    <View style={styles.topRow}>
                        <Text style={styles.topTitleText01}>Hello</Text>
                        <WavingHand02Icon48 />
                    </View>
                    <View style={styles.row01}>
                        <Text style={styles.row01Text}>Welcome to Farmlands</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    containter: {
        width: '100%',
        paddingHorizontal: 20,
    },
    containter01: {
        padding: 5,
        overflow:'hidden',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 22,
        backgroundColor: '#fff',
    },
    containter02: {
        height: 366,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    topRow: {
        paddingTop:20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topTitleText01: {
        fontSize: 40,
        fontWeight: '700',
    },
    row01:{
        paddingHorizontal:20,
    },
    row01Text:{
        fontSize:16,
    }
})