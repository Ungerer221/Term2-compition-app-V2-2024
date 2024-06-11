import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import HandPrayerIcon from '../icons/hand-prayer-stroke-rounded'
import { useNavigation } from '@react-navigation/native'

export default function CompetitionSectionView() {
    // TODO: 1. when the user enrolls in a competition they will be added to the enrolled collection inside the comepetition
    // TODO: 2. whoever is in the enrolled collection With user UID will be counted as enrolled in that competition 
    // TODO: 3. when that person is enrolled the button will change color and the will be an icon to show that the user is enrolled
    // TODO: 4. the user must be able to opt out of the competition

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.compInfoCon}>
                <View style={styles.compInfoTitleBox}>
                    <View style={styles.compInfoTitleBoxRow01}>
                        <Text style={styles.fontHeading02}>View the Competitions :0</Text>
                        <HandPrayerIcon />
                    </View>
                    <Text>Enroll in challenges and competitions to earn points and climb to the top</Text>
                </View>
                <View style={styles.compInfoTitleBox02}>
                    <View style={styles.titleBox03}>
                        <Text style={styles.fontHeading03}>Current Competitors:</Text>
                        <Text style={styles.fontbody01}>The current number of players Currently enrolled in the competitions</Text>
                    </View>
                    <View style={styles.numberOfCompBox}>
                        <Text>200</Text>
                    </View>
                </View>
            </View>
            <View>
                <Image
                    style={styles.pavIllustration}
                    source={require('../assets/ShopIllustration01.png')}
                />
            </View>
            <View style={styles.buttonCon}>
                <TouchableOpacity style={styles.enrollViewButton} onPress={() => navigation.navigate('EnrollScreen')}>
                    <Text style={styles.enrollViewButtonText}>View</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 2,
        borderRadius: 22,
        padding: 5,
        gap: 10,
        backgroundColor:'#fff',
        overflow:'hidden',
    },
    compInfoCon: {
        width: '100%',
        padding: 10,
        gap: 20,
        borderWidth: 2,
        borderRadius: 18,
        backgroundColor: '#fff',
        // backgroundColor: 'red',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    compInfoTitleBox: {
        // padding: 10,
        // width:'80%',
    },
    compInfoTitleBoxRow01: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    compInfoTitleBox02: {
        width: '100%',
        // overflow:'hidden',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        flexDirection: 'row',
        gap: 10,
        // backgroundColor:'red'
    },
    fontHeading02: {
        fontSize: 24,
        fontWeight: '800',
    },
    fontHeading03: {
        fontSize: 20,
        fontWeight: '700',
    },
    titleBox03: {
        // backgroundColor: 'red',
        width: '70%'
    },
    numberOfCompBox: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 12,
        borderWidth: 2,
    },
    fontbody01: {
        fontSize: 10,
    },
    buttonCon: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingTop: 40,
    },
    enrollViewButton: {
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: '#A08BF6',
        borderWidth: 2,
        borderRadius: 12,
        borderBottomRightRadius: 22,
    },
    enrollViewButtonText:{
        fontSize:16,
        fontWeight:'700',
    },
    pavIllustration: {
        width:150,
        position: 'absolute',
        left: -160,
        bottom:-103,
        zIndex:-10,
    },
})