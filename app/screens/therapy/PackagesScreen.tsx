
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';

interface Package {
  id: string;
  title: string;
  description: string;
  price: string;
}

const packages: Package[] = [
  {
    id: '1',
    title: 'Starter Pack',
    description: '4 sessions per month',
    price: '$200',
  },
  {
    id: '2',
    title: 'Standard Pack',
    description: '8 sessions per month',
    price: '$350',
  },
  {
    id: '3',
    title: 'Premium Pack',
    description: '12 sessions per month',
    price: '$450',
  },
];

const PackagesScreen = ({ navigation }: { navigation: StackNavigationProp<any> }) => {
  const renderItem = ({ item }: { item: Package }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Questionnaire')}>
      <BlurView intensity={50} tint="light" style={styles.packageContainer}>
        <LinearGradient
          colors={['rgba(102, 126, 234, 0.5)', 'rgba(118, 75, 162, 0.5)']}
          style={styles.gradient}
        >
          <Text style={styles.packageTitle}>{item.title}</Text>
          <Text style={styles.packageDescription}>{item.description}</Text>
          <Text style={styles.packagePrice}>{item.price}</Text>
          <TouchableOpacity style={styles.selectButton}>
            <Text style={styles.selectButtonText}>Select</Text>
          </TouchableOpacity>
        </LinearGradient>
      </BlurView>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#8A2BE2', '#4B0082']}
      style={styles.container}
    >
      <Text style={styles.title}>Choose a Package</Text>
      <FlatList
        data={packages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginBottom: 20,
  },
  packageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    width: 300,
  },
  gradient: {
    padding: 20,
  },
  packageTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginBottom: 10,
  },
  packageDescription: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    marginBottom: 10,
  },
  packagePrice: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginBottom: 10,
  },
  selectButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  selectButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#667EEA',
  },
});

export default PackagesScreen;
