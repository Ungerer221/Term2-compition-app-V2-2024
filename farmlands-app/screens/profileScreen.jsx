import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import { auth, getAuth } from "../config/firebase";
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
import LogoutCircle02Icon from '../icons/logout-circle-02-stroke-rounded';
import { getloggedinUser, handleLogin, handleLogout } from '../services/authService';
import { useFocusEffect } from '@react-navigation/native';
import { getUserData, getUserItem } from '../services/userService';

// TODO : Pass user data through here to profile page and display the data : check the data passing method used in the details pages

export default function ProfileScreen({ route, navigation }) {

  const [user, setUser] = useState([]);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [itemId, setItemId] = useState();
  const [itemUsername, setItemUsername] = useState();
  const [itemEmail, setItemEmail] = useState();
  const [itemPassword, setItemPassword] = useState();


  const logout = () => {
    handleLogout(email, password)
    console.log("pressed")
  }

  useFocusEffect(
    React.useCallback(() => {
      handleGettingUserData();
      getloggedinUser() // * this get the currentrly logged in user 
      return () => {

      }
    })
  )

  const handleGettingUserData = async () => {
    var userData = await getUserItem()
    setUser(userData)
  }



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
              <Text style={styles.userDataTitle}>{user.username}</Text>
              <Text style={styles.userDataBio}>email{user.email}</Text>
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
              {/* <Text style={styles.dashBoardSecText}>LeaderBoard</Text>
              <DividerBar /> */}
              {/* <LeaderBoardView /> */}
              <Text style={styles.dashBoardSecText}>Stats</Text>
              <DividerBar />
              <StatsBoardView />
            </View>
            <View style={styles.DangerBox}>
              <Text style={styles.dashBoardSecTextDanger}>! Danger Zone !</Text>
            </View>
            <DividerBar />
            <TouchableOpacity style={styles.LogoutButton} onPress={logout}>
              <Text style={styles.LogoutButtonText}>Log Out</Text>
              <LogoutCircle02Icon />
            </TouchableOpacity>
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
    paddingBottom: 20,
    gap: 20,
    width: '100%',
    // flex:0,
    // justifyContent:'center',
    // alignItems:'center',
  },
  dashBoardSecText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    opacity: 0.7,
  },
  dashBoardSecTextDanger: {
    // color: '#f46987',
    fontSize: 32,
    fontWeight: '900',
  },
  LogoutButton: {
    borderRadius: 12,
    borderWidth: 2,
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f64987'
  },
  LogoutButtonText: {
    fontSize: 20,
    fontWeight: '700',
    // color:'#fff'
  },
  DangerBox: {
    // borderWidth: 2,
    borderRadius: 22,
    padding: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});