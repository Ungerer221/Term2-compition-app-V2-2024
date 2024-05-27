import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
// icons
import Alert02Icon32 from '../icons/alert-02-stroke-rounded';

export default function EnrollCompView() {
    return (
        <View style={styles.container}>
            {/* enroll banner  */}
            <View style={styles.enrollBannerCon}>
                <View style={styles.enrollBannerRow}>
                    <Alert02Icon32 />
                    <Text style={styles.enrollBannerRowText}>Join Us</Text>
                    <Alert02Icon32 />
                </View>
                <Image
                    style={styles.enrollImage}
                    source={require('../assets/25.png')}
                />
                <Text style={styles.enrollBannerMainText}>Enter The Competition</Text>
                <TouchableOpacity
                    style={styles.enrollSignButton}

                >
                    <Text style={styles.enrollSignButtonText}>Signup</Text>
                </TouchableOpacity>
                <View style={styles.enrollBannerRow}>
                    <Alert02Icon32 />
                    <Text style={styles.enrollBannerRowText}>Join Us</Text>
                    <Alert02Icon32 />
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        //   backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    enrollBannerCon: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 20,
        overflow: 'hidden',
        borderRadius: 22,
        width: 350,
        backgroundColor: '#fff',

    },
    enrollBannerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    enrollBannerMainText: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    enrollBannerRowText: {
        fontSize: 16,
        fontWeight: '700',
    },
    enrollBackgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 40,
        left: 12,
        zIndex: -5,
        opacity: 0.7,
    },
    enrollSignButton: {
        width: '100%',
        backgroundColor: '#F65774',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
    },
    enrollSignButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
    enrollImage: {
        width: '100%',
        height: 162,
    }
});