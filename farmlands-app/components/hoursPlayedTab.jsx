import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
// icons
import { EvilIcons } from '@expo/vector-icons';

export default function HoursPlayedTab() {
    return (
        <View style={styles.container}>
            <View style={styles.hoursheading}>
                <EvilIcons name="gear" size={24} color="black" />
                <Text>HoursPlayedTab</Text>
            </View>
            <View style={styles.hourDetails}>
                <View style={styles.hourDetailsHighlight}>
                    <Text style={styles.hourDetailsHighlightText}>420</Text>
                </View>
                <Text>Hours</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        maxWidth:350,
        justifyContent:'space-between',
        width: '100%',
        // backgroundColor: '#fff',
        borderWidth:1,
        borderStyle:'dashed',
        padding: 8,
        borderRadius: 12,
    },
    hoursheading:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    hourDetails:{
        flexDirection:'row',
        gap:5,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    hourDetailsHighlight:{
        backgroundColor:'#82BF00',
        padding:4,
        borderRadius:6,
    },
    hourDetailsHighlightText:{
        color:'white',
        fontSize:14,
        fontWeight:'700',
    }
})