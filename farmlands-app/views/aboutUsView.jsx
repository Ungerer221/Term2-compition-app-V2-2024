import { View, Text, StyleSheet, Image, } from 'react-native'
import React from 'react'
// components
import MoreButton01 from '../components/moreButton01';

export default function AboutUsView() {
    return (
        <View style={styles.container}>
            <View style={styles.container02}>
                <View style={styles.textContainer}>
                    <Text style={styles.heading01Text}>about Us</Text>
                    <Text style={styles.paragraphText01}>
                        Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos.
                    </Text>
                </View>
                <View style={styles.bottomRow}>
                    <MoreButton01 />
                </View>
                <Image
                    style={styles.backGroundImage}
                    source={require('../assets/24.png')}
                />
                <View style={styles.colorBlock01}></View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: 350,
        height: 284,
        borderRadius: 22,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
        width: 350,
        height: 284,
        borderRadius: 22,
        overflow: 'hidden',
        backgroundColor: '#fff',
        // backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
    textContainer: {
        flex: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 302,
    },
    heading01Text: {
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'capitalize',
    },
    paragraphText01: {
        fontSize: 14,
        fontWeight: '400',
    },
    backGroundImage: {
        width: 300,
        height: 150,
        // backgroundColor: 'blue',
        zIndex: -2,
        position: 'absolute',
        bottom: -15,
        left: -35,
        // margin:'auto',
    },
    colorBlock01: {
        width: 200,
        height: 100,
        backgroundColor: '#F65774',
        position: 'absolute',
        right: -80,
        top: -50,
        transform: [{ rotate: '45deg' }],
        zIndex: -5,
    },
    bottomRow: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // backgroundColor:'red',
        paddingRight:20,
        position:'relative',
        bottom:-110,
    }
});