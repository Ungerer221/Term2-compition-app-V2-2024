import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
// Icons
import { FontAwesome } from '@expo/vector-icons';

// button for the about section
// dont use positioning on a component as it will aplly it to wherever you use it.

export default function MoreButton01() {
    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    console.log('You tapped the button!');
                }}>
                <Text style={styles.btnText}>More</Text>
                <FontAwesome name="lightbulb-o" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        flex:0,
        justifyContent:'center',
        align:'center',
        flexDirection:'row',
        gap:8,
        backgroundColor:'#F65774',
        borderRadius:12,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10,
        paddingRight:10,
        // depth
        zIndex:5,
    },
    btnText:{
        fontSize:16,
        fontWeight:'700',
        // can make this themed using the them section in app.js
        color:'#fff',
        margin:'auto',
    }
});