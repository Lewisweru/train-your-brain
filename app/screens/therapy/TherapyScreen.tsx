
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';

const TherapyScreen = ({ navigation }: { navigation: StackNavigationProp<any> }) => {
  return (
    <LinearGradient
      colors={['#8A2BE2', '#4B0082']}
      style={styles.container}
    >
      <Text style={styles.title}>Welcome to Therapy</Text>
      <Text style={styles.subtitle}>Your journey to a better you starts here.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Packages')}
      >
        <Text style={styles.buttonText}>Book a Session</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#667EEA',
  },
});

export default TherapyScreen;
