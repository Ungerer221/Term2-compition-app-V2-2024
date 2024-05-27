import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
// icons
import { Feather } from '@expo/vector-icons';
// components
import DateJoined from './dateJoined';

// todo : maybe change this to a view so we can import datejoined

export default function LeaderBoardDataRow() {
    return (
        <View style={styles.container}>
            <View style={styles.userDate}>
                <Feather name="user" size={24} color="black" />
                <Text style={styles.userDateText}>User</Text>
            </View>
            <Text>Score</Text>
            <Text>Date Joined</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 0,
    //   backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection:'row',
      width:'100%',
    },
    userDate:{
        flexDirection:'row',
        alignItems: 'center',
      justifyContent: 'center',
      gap:5,
    },
    userDateText:{
        fontSize:16,
        fontWeight:'700',
    }
  });