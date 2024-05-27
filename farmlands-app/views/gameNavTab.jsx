import { View, Text, TouchableOpacity,Button } from 'react-native'
import React from 'react'
// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function GameNavTab({ navigation,navigate }) {
    return (
        <View>
            <TouchableOpacity>
                <Text>GameNavTab</Text>
                {/* <Button title="Go to Game" onPress={() => navigation.navigate('Game')} /> */}
            </TouchableOpacity>
        </View>
    )
}