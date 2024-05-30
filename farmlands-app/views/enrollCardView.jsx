import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Sun01Icon from '../icons/sun-01-stroke-rounded'

export default function EnrollCardView() {
    return (
        <View style={styles.enrollCard}>
            <View style={styles.enrollCardTitleRow}>
                <View style={styles.enrollCardTitleCon}>
                    <Text style={styles.enrollCardTitle}>Daily Competition</Text>
                    <Text style={styles.enrollText03}>(1/7)</Text>
                </View>
                <Sun01Icon />
            </View>
            <Text>Collect $100000</Text>
            <View style={styles.enrollDateMainContainer}>
                <Text style={styles.enrollText03}>End Date:</Text>
                <View style={styles.enrollCardDateCon}>
                    <View style={styles.enrollCardDateBlock}>
                        <Text style={styles.enrollText02}>28</Text>
                    </View>
                    <Text style={styles.enrollText02}>:</Text>
                    <View style={styles.enrollCardDateBlock}>
                        <Text style={styles.enrollText02}>05</Text>
                    </View>
                    <Text style={styles.enrollText02}>:</Text>
                    <View style={styles.enrollCardDateBlock}>
                        <Text style={styles.enrollText02}>2024</Text>
                    </View>
                </View>
            </View>
            <View>
                {/* // TODO : when pressing this button it will change the users enrolment in the activity from false to true */}
                {/* // TODO : check Data routing. The user must be linked to the Competition data */}
                <TouchableOpacity style={styles.enrollBtn}>
                    <Text style={styles.enrollBtnText}>participate</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    enrollCard: {
        // height:50,
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 12,
        marginTop: 10,
        gap: 10,
    },
    enrollCardTitleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    enrollCardTitleCon:{
        flexDirection:'row',
        alignItems: 'center',
        gap:10,
    },
    enrollCardTitle: {
        fontSize: 24,
        fontWeight: '700',
    },
    enrollDateMainContainer: {
        gap: 10,
    },
    enrollText02: {
        fontSize: 20,
        fontWeight: '600',
    },
    enrollText03: {
        fontSize: 18,
        fontWeight: '600',
    },
    enrollCardDateCon: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 20,
    },
    enrollCardDateBlock: {
        padding: 15,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 12,
    },
    enrollBtn: {
        backgroundColor: '#A597DE',
        padding: 10,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    enrollBtnText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        textTransform: 'capitalize',
    }
})