import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
// icons
import { FontAwesome } from '@expo/vector-icons';
import MoneyBag02Icon from '../icons/money-bag-02-stroke-rounded';

export default function TotalScoreBar() {
    return (
        <View style={styles.container}>
            {/* <FontAwesome name="money" size={24} color="black" /> */}
            <MoneyBag02Icon />
            <Text style={styles.scoreText}>$00.00</Text>
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