import { View, Text, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native'
import React from 'react'
import Tree04Icon from '../icons/tree-04-stroke-rounded';
import EnrollCardView from '../views/enrollCardView';


export default function EnrollScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.container02}>
                <View style={styles.greetingCon}>
                    <View style={styles.greetingTopRow}>
                        <Text style={styles.greetingTitleText}>Ready!!</Text>
                        <Tree04Icon />
                    </View>
                    <View>
                        <Text style={styles.greetingNormText}>Here you can enroll in any competition that is currently available.</Text>
                    </View>
                </View>
                <View>
                    <ScrollView style={styles.enrollCardCon}>
                        <EnrollCardView />
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'red',
        padding: 10,
    },
    container02: {
        width: '100%',
        height: '93%',
        padding: 5,
        gap: 20,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 16,
        marginTop: 50,
        // backgroundColor:'red',
    },
    greetingCon: {
        width: '100%',
        height: 150,
        padding: 10,
        gap: 5,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 12,
        // backgroundColor:'red',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    greetingTopRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    greetingTitleText: {
        fontSize: 40,
        fontWeight: '700',
    },
    greetingNormText: {
        fontSize: 16,
    },
    enrollCardCon: {
        gap: 10,
        height: 557,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 22,
    },
    enrollCard: {
        // height:50,
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 12,
        marginTop: 10,
    },
});
