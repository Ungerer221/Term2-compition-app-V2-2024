import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function DividerBar() {
  return (
    <View style={styles.container}>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:0,
        justifyContent:'center',
        alignItems:'center',
        height:2,
        width:'100%',
        backgroundColor:'black',
        opacity:0.25,
        borderRadius:10,
        margin:'auto',
    }
})