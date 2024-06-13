import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
// icons
import { FontAwesome } from '@expo/vector-icons';
import MoneyBag02Icon from '../icons/money-bag-02-stroke-rounded';
import { getUserItem } from '../services/userService';
import { useFocusEffect } from '@react-navigation/native';

export default function TotalScoreBar() {

    // getting all users 
    const [user, setUser] = useState([]);

    const handleGettingUserData = async () => {
        var userData = await getUserItem()
        setUser(userData)
    }
    useFocusEffect(
        React.useCallback(() => {
            handleGettingUserData()
            return () => {
            }
        },[])
    )

    return (
        <View style={styles.container}>
            {/* <FontAwesome name="money" size={24} color="black" /> */}
            <MoneyBag02Icon />
            <Text style={styles.scoreText}>${user.score}.00</Text>
            {/* <FontAwesome name="money" size={24} color="black" /> */}
            <MoneyBag02Icon />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        justifyContent:'center',
        gap: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: 350,
        width: '100%',
        padding: 20,
        // backgroundColor:'black',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'black',
        borderRadius: 12,
        margin: 'auto',
    },
    scoreText: {
        fontSize: 32,
        fontWeight: '700',
        color: '#000',
        // backgroundColor:'red',
    }
});