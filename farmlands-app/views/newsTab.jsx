import { View, Text, StyleSheet, Image, } from 'react-native'
import React from 'react'
// Icons
import { Ionicons } from '@expo/vector-icons';
import Bookmark02Icon32 from '../icons/bookmark-02-stroke-rounded';
import News01Icon24 from '../icons/news-01-stroke-rounded';
// componenets
import MoreBtn02 from '../components/moreBtn02';
import MoreButton01 from '../components/moreButton01';

export default function NewsTab() {
  return (
    <View style={styles.container}>
      {/* inner container */}
      <View style={styles.container02}>
        {/* top row */}
        <View style={styles.topRow}>
          {/* title text */}
          <View style={styles.titleTextCon}>
            <Text style={styles.titleText}>News</Text>
            {/* <Ionicons name="newspaper-outline" size={24} color="black" /> */}
            <News01Icon24 />
          </View>
          {/* <Ionicons name="bookmark-outline" size={24} color="black" /> */}
          <Bookmark02Icon32 />
        </View>
        {/* background */}
        <Image
          style={styles.backGroundImage}
          source={require('../assets/37.png')}
        />
        {/* middel */}
        <View style={styles.newsDescriptionBlock}>
          <Text>
            Here you will find all the latest happenings in the games development and enviroment.
            All future plans, Updates and discussions all in one place.
          </Text>
        </View>
        {/* bottom row */}
        <View style={styles.bottomRow}>
          <MoreButton01 />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: 350,
    // height: 284,
    borderRadius: 22,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  container02: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'red',
    borderRadius: 22,
    padding: 20,
    width: 350,
    // height: 284,
    overflow: 'hidden',
  },
  topRow: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  titleTextCon: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 6,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
  },
  backGroundImage: {
    width: '100%',
    height: 270,
    // position: 'absolute',
    // bottom: -28,
    // zIndex: -5,
  },
  newsDescriptionBlock: {
    width: '100%',
    padding: 10,
  },
  bottomRow: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
});