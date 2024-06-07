import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function EventCountDownView() {
    return (
        <View style={styles.container}>

            <View style={styles.textRowCon}>
                <View>
                    <View style={styles.textCon}>
                        <Text style={styles.mediumText}>Current Event</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.textCon}>
                        <Text style={styles.mediumText}>120 days left</Text>
                    </View>
                </View>
            </View>
            <Image
                style={styles.backGroundImage}
                source={require('../assets/Hazard.png')}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        backgroundColor:'#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 2,
        borderRadius: 12,
        overflow:'hidden',
    },
    textRowCon: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textCon: {
        padding: 5,
        borderRadius:5,
        backgroundColor: '#fff',
    },
    mediumText: {
        fontSize: 14,
        fontWeight: '700',
    },
    backGroundImage:{
        position:'absolute',
        width:'120%',
        height:50,
        zIndex:-10,
    }
})