import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'

export default function FarmPlantingSpaceView() {
    return (
        <View style={styles.container}>
            <View style={styles.farmPlantPlot}>
                <Text>1</Text>
            </View>
            <View style={styles.farmPlantPlot}>
                <Text>2</Text>
            </View>
            <View style={styles.farmPlantPlot}>
                <Text>3</Text>
            </View>
            <View style={styles.farmPlantPlot}>
                <Text>4</Text>
            </View>
            <View style={styles.farmPlantPlot}>
                <Text>5</Text>
            </View>
            <View style={styles.farmPlantPlot}>
                <Text>6</Text>
            </View>
            <View style={styles.farmPlantPlot}>
                <Text>7</Text>
            </View>
            <View style={styles.farmPlantPlot}>
                <Text>8</Text>
            </View>
            <View style={styles.farmPlantPlot}>
                <Text>9</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: 326,
        height: 344,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 40,
        padding: 20,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'black',
        borderRadius: 44,
    },
    farmPlantPlot: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 68,
        height: 68,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
    }
});