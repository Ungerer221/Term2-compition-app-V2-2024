import { View, Text, StyleSheet, ScrollView, Image, } from 'react-native'
import React from 'react'
// views
import TopNavBar from '../views/topNavBar';
// componenets
import ProfilePicMain from '../components/profilePicMain';
import DateJoined from '../components/dateJoined';
import DividerBar from '../components/dividerBar';
// views
import TotalScoreBar from '../views/totalScoreBar';
import LeaderBoardView from '../views/leaderBoardView';
import StatsBoardView from '../views/statsBoardView';
import BadgesTab from '../views/badgesTab';

export default function ProfileScreen() {
  return (
    // could try a view behind the scroll view to add background elements that arent affected by scroll
    <ScrollView >
      <View style={styles.container}>
        {/* <View style={styles.colorBlock02}></View> */}
        <TopNavBar />
        {/* top section con */}
        <View style={styles.topSectionContainer}>
          <View style={styles.profileTopSec}>
            <ProfilePicMain></ProfilePicMain>
            <View style={styles.userDataCon}>
              <Text style={styles.userDataTitle}>the Users Name</Text>
              <Text style={styles.userDataBio}>Person bio</Text>
              <DateJoined></DateJoined>
            </View>
            {/* the backgroundimages */}
            <View style={styles.backgroundImageRow}>
              <Image
                style={styles.backGroundImagePlant}
                source={require('../assets/CactusVasenoLight.png')}
              />
              <Image
                style={styles.backGroundImagePlant}
                source={require('../assets/plantVase.png')}
              />
            </View>
          </View>
        </View>
        {/* top section con end */}
        {/* Dashboard section */}
        <View style={styles.dashBoardSection}>
          <View style={styles.dasBoardSecContentCon}>
            <Text style={styles.dashboardTitle01}>Your Dashboard</Text>
            <Text style={styles.dashboardText01}>Total Score today</Text>
            <TotalScoreBar />
            <View style={styles.dashBoardCon}>
              <BadgesTab />
              <Text style={styles.dashBoardSecText}>LeaderBoard</Text>
              <DividerBar />
              <LeaderBoardView />
              <Text style={styles.dashBoardSecText}>Stats</Text>
              <DividerBar />
              <StatsBoardView />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    // gap: 20,
    // backgroundColor:'#ffd166',
    // backgroundColor:'red',
  },
  colorBlock02: {
    backgroundColor: '#ffd166',
    position: 'absolute',
    width: '100%',
    height: 311.5,
  },
  topSectionContainer: {
    backgroundColor: '#ffd166',
    width: '100%',
  },
  profileTopSec: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    // backgroundColor: 'purple',
    backgroundColor: '#fff',
    width: '100%',
    borderBottomLeftRadius: 40,
    paddingBottom: 20,
    paddingTop: 20,
  },
  dashBoardSection: {
    backgroundColor: '#ffd166',
    width: '100%',
    padding: 20,
    borderTopRightRadius: 80,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDataCon: {
    flex: 0,
    width: "100%",
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    gap: 5,
    // backgroundColor: 'red',
  },
  userDataTitle: {
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  userDataBio: {
    fontSize: 16,
    fontWeight: '400',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  backgroundImageRow: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    zIndex: -3,
  },
  backGroundImagePlant: {
    height: 200,
    width: 100,
  },
  dashboardTitle01: {
    fontSize: 32,
    fontWeight: '700',
    margin: 'auto',
  },
  dashboardText01: {
    fontWeight: '700',
    fontSize: 16,
    textTransform: 'capitalize',
    margin: 'auto',
  },
  dashBoardCon: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 10,
  },
  dasBoardSecContentCon: {
    paddingTop: 20,
    gap: 20,
    // flex:0,
    // justifyContent:'center',
    // alignItems:'center',
  },
  dashBoardSecText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    opacity: 0.7,
  }
});