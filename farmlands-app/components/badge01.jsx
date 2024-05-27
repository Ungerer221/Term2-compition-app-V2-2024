import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
// icons
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Badge01() {
    return (
        <View style={styles.container}>
            {/* <Text>badge01</Text> */}
            <SimpleLineIcons name="badge" size={24} color="black" />
            <Text>Earn $1000</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:100,
      height:100,
      borderColor:'black',
      borderWidth:1,
      borderRadius:12,
    },
  });
  