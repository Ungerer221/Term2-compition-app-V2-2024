import { View, Text, StyleSheet, Image, } from 'react-native'
import React from 'react'
// Icon
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Alert02Icon32 from '../icons/alert-02-stroke-rounded';
// Components
import MoreBtn02 from '../components/moreBtn02';

export default function SeasonsEndTab() {
  return (
    <View style={styles.container}>
      {/* top row */}
      <View style={styles.topRow}>
        <Text style={styles.heading01Text}>Seasons End !</Text>
        {/* <MaterialCommunityIcons name="sign-caution" size={24} color="black" /> */}
        <Alert02Icon32/>
      </View>
      {/* row 2 */}
      <View style={styles.textConatainer}>
        <Text style={styles.paragraphText01}>The season will end on 6th October, where the winner will be chosen.</Text>
        {/* <Text>You Have</Text> */}
      </View>
      {/* background */}
      <Image
        style={styles.backGroundImage}
        source={require('../assets/393.png')}
      />
      {/* bottom row */}
      <View style={styles.bottomRowCon}>
        <View style={styles.daysLeftTextCon}>
          <Text style={styles.daysLeftText01}>120</Text>
          <Text style={styles.daysLeftText02}>days left</Text>
        </View>
        {/* more button here */}
        <MoreBtn02 />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    // alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    // height: 172,
    width: 350,
    borderRadius: 22,
    backgroundColor: '#fff',
    padding: 20,
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  topRow: {
    flex: 0,
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
  },
  textConatainer: {
    width: 263,
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 10,
    // backgroundColor: 'red',
  },
  heading01Text: {
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  paragraphText01: {
    fontSize: 14,
    fontWeight: '400',
  },
  daysLeftTextCon: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 2,
  },
  daysLeftText01: {
    color: '#F65774',
    fontSize: 32,
    fontWeight: '700',
  },
  daysLeftText02: {
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  bottomRowCon: {
    flex: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: "100%",
    position: 'relative',
  },
  backGroundImage: {
    width: 250,
    height: 170,
    // position: 'relative',
    // backgroundColor:'red',
    margin: 'auto',
    // top: -72,
    // zIndex: -5,
    // opacity:0.5,
  }
});