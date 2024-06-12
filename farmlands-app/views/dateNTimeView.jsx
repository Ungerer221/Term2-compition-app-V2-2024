import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function DateNTimeView() {

    const [currentDate, setCurrentDate] = useState('');
    const [currentDay,setCurrentDay]= useState('');
    const [currentMonth,setCurrentMonth]= useState('');
    const [currentYear,setCurrentYear]= useState('');

    useEffect(() => {
        var date = new Date().getDate(); //Current date
        var month = new Date().getMonth() + 1; // current month
        var year = new Date().getFullYear(); // current Month

        setCurrentDate(
            date + '/' + month + '/' + year
        );
        setCurrentDay(date)
        setCurrentMonth(month)
        setCurrentYear(year)
    }, []);

    return (
        <View style={styles.container}>
            {/* column 1 */}
            <View>
                <Text style={styles.nextText01}>Current Day</Text>
                <View style={styles.timeCon}>
                    <View style={styles.timeBox}>
                        <View style={styles.timeboxC1}>
                            <View style={styles.currentdatebox}>
                                <Text style={styles.currentdateText}>{currentDay}</Text>
                            </View>
                        </View>
                        <View style={styles.timeboxC2}>
                            <View>
                                <Text style={styles.currentdateSubText}>{currentMonth}</Text>
                            </View>
                            <View>
                                <Text style={styles.currentdateSubText}>{currentYear}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/* COlumn 2 */}
            <View style={styles.timeCon02}>
                <Text style={styles.nextText01}>Next Event Start</Text>
                <View style={styles.timeBox02}>
                    <View style={styles.nextseasonTitleRow}>
                        <Text style={styles.nextText02}>Summer Season</Text>
                    </View>
                    <View style={styles.nextSeasonDateCon}>
                        <View>
                            <Text style={styles.currentdateText}>26</Text>
                        </View>
                        <View>
                            <Text style={styles.nextText01}>September</Text>
                            <Text style={styles.nextText02}>2024</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        // backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        // gap:20,
    },
    timeCon: {
        backgroundColor: '#A08BF6',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        width: 190,
    },
    timeCon02: {

    },
    timeBox: {
        backgroundColor: '#fff',
        padding: 10,

        borderWidth: 2,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    timeBox02: {
        width: '100%',
        backgroundColor: '#A08BF6',
        padding: 10,
        paddingHorizontal: 20,
        // flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 5,
        height: 99,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
    },
    currentdatebox: {
        padding: 5,
        borderWidth: 2,
        borderRadius: 6,
    },
    timeboxC1: {

    },
    timeboxC2: {
        gap: 20,
    },
    currentdateText: {
        fontSize: 40,
        fontWeight: '700',
    },
    currentdateSubText: {
        fontSize: 24,
        fontWeight: '700',
    },
    nextseasonTitleRow: {
        justifyContent: 'flex-start',
    },
    nextSeasonDateCon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    nextText01: {
        fontSize: 16,
        fontWeight: '700',
    },
    nextText02: {
        fontSize: 12,
        fontWeight: '700',
    }
})