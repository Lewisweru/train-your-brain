
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuestionnaireScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questionnaire</Text>
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

export default QuestionnaireScreen;
