
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#2D3748', '#718096']}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.title}>Dashboard</Text>
          <View style={styles.cardContainer}>
            {/* Analytics Cards */}
            <View style={[styles.card, styles.glassmorphism]}>
              <Text style={styles.cardTitle}>Therapy Sessions</Text>
              <Text style={styles.cardValue}>12</Text>
            </View>
            <View style={[styles.card, styles.glassmorphism]}>
              <Text style={styles.cardTitle}>Revenue</Text>
              <Text style={styles.cardValue}>$1,200</Text>
            </View>
            <View style={[styles.card, styles.glassmorphism]}>
              <Text style={styles.cardTitle}>New Users</Text>
              <Text style={styles.cardValue}>30</Text>
            </View>
          </View>
          {/* Charts placeholder */}
          <View style={[styles.chartContainer, styles.glassmorphism]}>
            <Text style={styles.chartTitle}>Therapy Bookings</Text>
            <FontAwesome5 name="chart-line" size={100} color="white" />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    color: 'white',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '30%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  glassmorphism: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: 'white',
    marginBottom: 10,
  },
  cardValue: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  chartContainer: {
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: 'white',
    marginBottom: 20,
  },
});

export default DashboardScreen;
