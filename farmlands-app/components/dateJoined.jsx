import { View, Text,StyleSheet, } from 'react-native'
import React from 'react'
// icons
import { Ionicons } from '@expo/vector-icons';

export default function DateJoined() {
    return (
        <View style={styles.container}>
            <View>
                <Ionicons name="calendar-outline" size={24} color="black" />
            </View>
            <Text style={styles.joinedText}>Joined</Text>
            <Text style={styles.joinedText}>Date</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      gap:6,
    },
    joinedText:{
      fontSize:16,
      textTransform:'capitalize',
    }
  });