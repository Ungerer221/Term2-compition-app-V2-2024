import { View, Text, ScrollView, StyleSheet, Button, Image, ImageBackground } from 'react-native'
import React from 'react'
// views
import TopNavBar from '../views/topNavBar';
import LeaderBoardView from '../views/leaderBoardView';
import TotalScoreTile from '../views/totalScoreTile';
import AboutUsView from '../views/aboutUsView';
import BadgesTab from '../views/badgesTab';
import SeasonsEndTab from '../views/seasonsEndTab';
import NewsTab from '../views/newsTab';
import GameNavTab from '../views/gameNavTab.jsx';
import EnrollCompView from '../views/enrollCompView.jsx';
// the tab navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// icons
import TractorIcon32 from '../icons/tractor-stroke-rounded.jsx';
// import { Home01Icon } from '@hugeicons/react-native-pro';
import { Home01Icon } from '../icons/HomeIcon.jsx';
import { TabNavigator } from './homeTabNav/homeTabNav.js';
import HelloMeetView from '../views/helloMeetView.jsx';
import EventCountDownView from '../views/eventCountDownView.jsx';
import DateNTimeView from '../views/dateNTimeView.jsx';
import CompetitionSectionView from '../views/competitionSectionView.jsx';
import WavingHand02Icon48 from '../icons/waving-hand-02-stroke-rounded.jsx';
// import { showErrorCSS } from 'react-native-svg/lib/typescript/deprecated.js';
// images

export default function Home02Screen({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <TopNavBar />
                <View style={styles.titleTextCon}>
                    <View style={styles.titleTextTopRow}>
                        <Text style={styles.homeWelcomeText}>Welcome</Text>
                        <WavingHand02Icon48/>
                    </View>
                    <Text style={styles.welcomSubText}>To your new home away from home</Text>
                </View>
                <View style={styles.countdownViewCon}>
                    <EventCountDownView />
                </View>
                <View style={styles.dateAndTimeCon}>
                    <DateNTimeView />
                </View>
                <View style={styles.compViewCon}>
                    <CompetitionSectionView />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width:'100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: 900,
        //   marginTop:60,
        paddingTop: 40,
        paddingBottom: 40,
        gap: 20,
        // paddingHorizontal:20,
        // backgroundColor:'red',
    },
    titleTextCon: {
        paddingHorizontal: 20,
        width: '100%',
    },
    titleTextTopRow:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    countdownViewCon: {
        paddingHorizontal: 20,
    },
    dateAndTimeCon: {
        width: '100%',
        paddingHorizontal: 20,
        // backgroundColor:'red',
    },
    homeWelcomeText: {
        fontSize: 46,
        fontWeight: '900',
    },
    welcomSubText: {
        fontSize: 16,
        fontWeight: '400',
    },
    compViewCon: {
        width: '100%',
        paddingHorizontal: 20,
    }
})