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
// import { showErrorCSS } from 'react-native-svg/lib/typescript/deprecated.js';
// images


export default function HomeScreen({ navigation }) {
    // could use abouve method (jumping to tabs) to creat our own custom navbar without the top bar

    return (
        <ScrollView >
            <View style={styles.container}>
                {/* <View style={styles.colorBlock02}></View> */}
                <View style={styles.backgroundColorBlock02}></View>
                <TopNavBar></TopNavBar>
                {/* <Text style={styles.homeIntroTitleText}>Welcome</Text> */}
                <LeaderBoardView></LeaderBoardView>
                <EnrollCompView />
                {/* <Text style={styles.heading01}>your total score</Text> */}
                <View style={styles.home02Con}>
                    {/* <TotalScoreTile></TotalScoreTile> */}
                    <Text style={styles.heading01}>Badges Earned</Text>
                    <BadgesTab></BadgesTab>
                    {/* // todo : see if you can make the a touchable */}
                    <View style={styles.gameNavTabCon}>
                        {/* nav button  */}
                        <View style={styles.gameNavBTN}>
                            <Button
                                title="Your Farm"
                                onPress={() => navigation.navigate('Game')}
                            />
                            <TractorIcon32 />
                        </View>
                        <View>
                            <Image
                                style={styles.shopIllustration}
                                source={require('../assets/ShopIllustration01.png')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.pavIllustration}
                                source={require('../assets/pavemantill.png')}
                            />
                        </View>
                        <ImageBackground source={require('../assets/DirtBackground021.png')} resizeMode="cover" style={styles.gameBackgroundImage}>
                        </ImageBackground>
                    </View>
                    <GameNavTab />
                    <SeasonsEndTab></SeasonsEndTab>
                    <NewsTab></NewsTab>
                    <AboutUsView></AboutUsView>

                    {/* <Home01Icon /> */}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: 900,
        //   marginTop:60,
        paddingTop: 40,
        paddingBottom: 40,
        gap: 20,
    },
    homeIntroTitleText: {
        fontWeight: '700',
        fontSize: 32,
    },
    home02Con: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
        width: '100%',
        paddingTop: 20,
        // backgroundColor:'#A08BF6',
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    colorBlock02: {
        position: 'absolute',
        top: -90,
        width: '100%',
        height: 520,
        borderRadius: 200,
        backgroundColor: '#F65774'
    },
    heading01: {
        fontSize: 24,
        fontWeight: '700',
        textTransform: 'capitalize',
    },
    backgroundColorBlock02: {
        width: '100%',
        // height: '26.5%',
        height: '100%',
        backgroundColor: '#FFD166',
        position: 'absolute',
        top: 0,
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
    },
    // game atb
    gameNavTabCon: {
        width: '100%',
        maxWidth: 350,
        minHeight: 138,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'purple',
        borderRadius: '22',
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#000',
    },
    shopIllustration: {
        position: 'absolute',
        left: -170,
        bottom: -43,
        zIndex: -5,
    },
    pavIllustration: {
        position: 'absolute',
        bottom: -50,
        left: -200,
        zIndex: -5,
    },
    gameBackgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -10,
    },
    gameNavBTN: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5,
    }
});