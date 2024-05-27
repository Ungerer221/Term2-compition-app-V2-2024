import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
// icns
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// components
import HoursPlayedTab from '../components/hoursPlayedTab';
import DividerBar from '../components/dividerBar';

export default function StatsBoardView() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.topRowText}>your stats</Text>
        <AntDesign name="dashboard" size={24} color="black" />
      </View>
      {/* hours played */}
      <HoursPlayedTab />
      <DividerBar />
      {/* Plants planted  */}
      <View style={styles.statsSubRow}>
        <Text style={styles.statsDetailText}>Plants Planted</Text>
        <View style={styles.statsSubRowDetail}>
          <Text style={styles.statsDetailText}>45</Text>
          <MaterialCommunityIcons name="leaf-circle-outline" size={24} color="black" />
        </View>
      </View>
      {/* highest score  */}
      <View style={styles.statsSubRow}>
        <Text style={styles.statsDetailText}>Highest Score</Text>
        <View style={styles.statsSubRowDetail}>
          <Text style={styles.statsDetailText}>80000</Text>
          <MaterialCommunityIcons name="progress-star" size={24} color="black" />
        </View>
      </View>
      {/* Seasons PLayed  */}
      <View style={styles.statsSubRow}>
        <Text style={styles.statsDetailText}>seasons played</Text>
        <View style={styles.statsSubRowDetail}>
          <Text style={styles.statsDetailText}>8</Text>
          <Ionicons name="leaf" size={24} color="black" />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: '#fff',
    // backgroundColor:'#F1B46B',
    width: '100%',
    padding: 20,
    borderRadius: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5,
  },
  topRowText: {
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  statsSubRow: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  statsSubRowDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statsDetailText: {
    fontSize: 16,
  }
})