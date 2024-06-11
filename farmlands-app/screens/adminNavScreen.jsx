import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Sun01Icon from '../icons/sun-01-stroke-rounded'

export default function AdminNavScreen({ navigation }) {

    const goToPlantList = () => { navigation.navigate("PlantList") }
    const goToCompetitionList = () => { navigation.navigate("CompList") }
    const goToUserList = () => { navigation.navigate("UserList") }

    return (
        <View style={styles.container}>
            <View style={styles.container02}>
                <View style={styles.infoCon}>
                    <Text style={styles.titleText01}>Please Select which list to view</Text>
                    <Sun01Icon />
                </View>
                <Pressable style={styles.navButton01} onPress={goToPlantList}>
                    <Text style={styles.navButtonText}>Plant List</Text>
                </Pressable>
                <Pressable style={styles.navButton02} onPress={goToCompetitionList}>
                    <Text style={styles.navButtonText}>Competition List</Text>
                </Pressable>
                <Pressable style={styles.navButton03} onPress={goToUserList}>
                    <Text style={styles.navButtonText}>User List</Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    container02: {
        width: '100%',
        height: '100%',
        padding: 10,
        borderWidth: 2,
        borderRadius: 22,
        gap: 20,
    },
    infoCon: {
        width: '100%',
        padding: 20,
        borderRadius: 12,
        borderWidth: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    navButton01: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#F25757',
        borderRadius: 22,
        borderWidth: 2,
    },
    navButton02: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#FFD23F',
        borderRadius: 22,
        borderWidth: 2,
    },
    navButton03: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#8CC86E',
        borderRadius: 22,
        borderWidth: 2,
    },
    navButtonText: {
        fontWeight: '600',
        fontSize: 18,
    },
    titleText01: {
        fontSize: 24,
        fontWeight: '900',
        width: 200,
    }
})