import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import WavingHand02Icon48 from '../icons/waving-hand-02-stroke-rounded'
import { useNavigation } from '@react-navigation/native'

export default function HelloMeetView() {

    const navigation = useNavigation();

    return (
        <View style={styles.containter}>
            <View style={styles.containter01}>
                <View style={styles.containter02}>
                    <View>
                        <View style={styles.topRow}>
                            <Text style={styles.topTitleText01}>Hello !!!</Text>
                            <WavingHand02Icon48 />
                        </View>
                        <View style={styles.row01}>
                            <Text style={styles.row01Text}>Welcome to Farmlands</Text>
                        </View>
                        <View style={styles.row02}>
                            <Text style={styles.row02Text}>Enroll and take place in any seasonal competition and complete our challenges to earn points</Text>
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={styles.enrollButton}
                            onPress={() => navigation.navigate('EnrollScreen')}
                        >
                            <Text style={styles.enrollButtonText}>Enroll</Text>
                        </TouchableOpacity>
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
        paddingBottom:10,
    },
    containter01: {
        padding: 5,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 22,
        backgroundColor: '#fff',
        
    },
    containter02: {
        // height: 366,
        padding: 20,
        gap:20,
        justifyContent: 'space-between',
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
        // paddingTop: 20,
        // paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topTitleText01: {
        fontSize: 40,
        fontWeight: '700',
    },
    row01: {
        // paddingHorizontal: 20,
        // marginTop:10,
    },
    row02: {
        // paddingHorizontal: 20,
        marginTop: 10,
    },
    row01Text: {
        fontSize: 16,
        fontWeight: '600',
    },
    row02Text: {
        fontSize: 14,
    },
    buttonRow: {
        // borderWidth: 2,
        // borderRadius: 24,
        // padding: 10,
    },
    enrollButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: '#A08BF6',
        borderRadius: 20,
        position: 'relative',
        left: "60%",
        borderWidth: 2,

    },
    enrollButtonText: {
        fontSize: 16,
        fontWeight: '700',
        // color:'#fff',
    }
})