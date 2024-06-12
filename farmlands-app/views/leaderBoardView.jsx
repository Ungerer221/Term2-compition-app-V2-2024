import { View, Text, StyleSheet, ScrollView } from 'react-native'
// import React from 'react'
import React, { useState } from 'react';
// views
import TotalScoreTile from './totalScoreTile';
// icons
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
// components
import LeaderBoardDataRow from '../components/leaderBoardDataRow';
import { useFocusEffect } from '@react-navigation/native';
import { getAllUsersList } from '../services/userService';

export default function LeaderBoardView() {

    const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
    const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
    const [shadowRadius, setShadowRadius] = useState(0);
    const [shadowOpacity, setShadowOpacity] = useState(0.1);

    // getting all users 
    const [users, setUsers] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            handleGettingUserData()
            return () => {
                // Do something when the screen is unfocused
                // Useful for cleanup functions
                // DO NOTHING
            }
        })
    )

    const handleGettingUserData = async () => {
        var allUserData = await getAllUsersList()
        setUsers(allUserData)
        // console.log("hello")
    }

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.purpConMain}>
                    <View style={styles.purpCon}>
                        <TotalScoreTile></TotalScoreTile>
                        <View style={styles.divederSec}>
                            {/* Circle */}
                            <View style={styles.cirle}></View>
                            {/* line */}
                            <View style={styles.line}></View>
                            {/* circle */}
                            <View style={styles.cirle}></View>
                        </View>
                        <View style={styles.leaderBoardTab}>
                            <Text style={styles.leaderBoardTabText}>LeaderBoard</Text>
                            <AntDesign name="dashboard" size={24} color="white" />
                        </View>
                    </View>
                    <View style={styles.leaderBoardUserView}>
                        {/* maybe use a flat list here */}
                        {
                            users != [] ? (
                                users.map((item, index) => (
                                    <View style={styles.containerDataRow} key={index}>
                                        <View style={styles.userDate}>
                                            <Feather name="user" size={24} color="black" />
                                            <Text style={styles.userDateText}>{item.username}</Text>
                                        </View>
                                        <Text>${item.score}</Text>
                                        <Text>h{users.date}</Text>
                                    </View>
                                ))
                            ) : (
                                <Text>no items found</Text>
                            )
                        }


                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        margin: 'auto',
        width: 370,
        // height: 370,
        backgroundColor: 'red',
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 22,
        backgroundColor: 'white',
        overflow: 'hidden',
        // borderWidth:5,
        // borderColor:'#fff',
    },
    purpConMain: {
        width: '100%',
        // backgroundColor: '#A08BF6',
        backgroundColor: '#F65774',
        paddingBottom: 20,
    },
    purpCon: {
        flex: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        // height:288,
        // backgroundColor: '#A08BF6',
        backgroundColor: '#F65774',
        // padding: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 22,
        gap: 10,
        // paddingBottom:20,
    },
    divederSec: {
        flex: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: 390,
        position: 'relative',
        right: 18,
    },
    cirle: {
        // backgroundColor: "#fff",
        backgroundColor: '#fff',
        width: 38,
        height: 38,
        borderRadius: 50,
    },
    line: {
        borderWidth: 1,
        borderStyle: 'dashed',
        width: 350,
        // borderColor: "#fff",
        borderColor: '#fff',
    },
    leaderBoardTab: {
        width: '100%',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 6,
        paddingLeft: 20,
    },
    leaderBoardTabText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
    },
    leaderBoardUserView: {
        backgroundColor: '#CA3458',
        width: '95%',
        maxHeight: 540,
        borderTopRightRadius: 22,
        borderBottomRightRadius: 22,
        padding: 20,
        gap: 20,
        overflow: 'hidden',
    },
    containerDataRow: {
        flex: 0,
        //   backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
    },
    userDate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    userDateText: {
        fontSize: 16,
        fontWeight: '700',
    },
});