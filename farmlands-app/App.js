// * keep eye on this
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import React, { useEffect, useState } from 'react';

//Screen Imports
import HomeScreen from './screens/homeScreen';
import ProfileScreen from './screens/profileScreen';
import GameScreen from './screens/gameScreen';
import NewsScreen from './screens/newsScreen';
import SignUpScreen from './screens/signUpScreen';
import LoginFormScreen from './screens/loginFormScreen';

// views
import TopNavBar from './views/topNavBar';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import { MyStack } from './screens/navigation';
import { MyTab } from './screens/navigation'

// * keep eye on this
import { createStackNavigator } from '@react-navigation/stack';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
// IMPORT ENDS ----------------------------------------------------------------------------------------------------------------------------

// todo : Make a splash screen and have it working
// todo : better your react navigation
// todo : figure out nesting for navigation and then stack navigation
// todo : add back buttons 

// * Tab navigator ------------------------------------------------------------------------------------------------------------------------
const Tab = createBottomTabNavigator();

// * stack navigation ---
const Stack = createStackNavigator();


// Staus Bar Styling const ---
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

// * The export defualt -------------------------------------------------------------------------------------------------------------------
export default function App() {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );

  const [loggedIn, SetLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        SetLoggedIn(true)
        console.log("user Logged in... " + user.email)
      } else {
        SetLoggedIn(false)
        console.log("no user logged in...")
      }
    })
    return unsubscribe
  })
  // the return ---------------------------------------------------------------------------------------------------------------------------
  return (
    <>
      {/* <MyStack></MyStack> */}
      {/* if you want free roam reamember to remove the navigation container for MyTab  and uncomment the mystack*/}
      {/* the logic used so that if the person is logged in they go straight to the home page */}
      {loggedIn ? (
        <MyTab />
      ) : (
        <MyStack />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container02: {
    backgroundColor: '#82BF00'
  }
});
