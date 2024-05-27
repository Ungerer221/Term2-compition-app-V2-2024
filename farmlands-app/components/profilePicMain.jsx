import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function ProfilePicMain() {
    return (
        <View style={styles.container}>
            <View style={styles.container02}>
                <Image
                    style={styles.icon}
                    source={require('../icons/profilePicIcon01.png')}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: 140,
        height: 140,
        borderRadius: 100,
        margin:'auto',
        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    container02: {
        // backgroundColor: '#82BF00'
    },
    icon: {
        width: 140,
        height: 140,
    }
});