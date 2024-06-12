import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
// icons
import { FontAwesome } from '@expo/vector-icons';
import { getUserItem } from '../services/userService';
import { useFocusEffect } from '@react-navigation/native';

export default function TotalScoreTile() {

    // getting all users 
    const [user, setUser] = useState([]);

    const handleGettingUserData = async () => {
        var userData = await getUserItem()
        setUser(userData) // this set user is linked to the above useState
    }

    useFocusEffect(
        React.useCallback(() => {
            handleGettingUserData()
            return () => {
            }
        })
    )

    return (
        <View style={styles.container}>
            <FontAwesome name="money" size={24} color="white" />
            <Text style={styles.scoreText}>${user.score}.00</Text>
            <FontAwesome name="money" size={24} color="white" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        maxWidth: 310,
        width: '100%',
        padding: 20,
        // backgroundColor:'black',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'white',
        borderRadius: 12,
        gap: 10,
    },
    scoreText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
        // backgroundColor:'red',
    }
});