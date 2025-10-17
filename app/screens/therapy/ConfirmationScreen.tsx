
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConfirmationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
  },
});

export default ConfirmationScreen;
