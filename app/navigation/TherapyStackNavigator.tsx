
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TherapyScreen from '../screens/therapy/TherapyScreen';
import TherapyBookingScreen from '../screens/therapy/TherapyBookingScreen';
import PackagesScreen from '../screens/therapy/PackagesScreen';
import QuestionnaireScreen from '../screens/therapy/QuestionnaireScreen';
import PaymentScreen from '../screens/therapy/PaymentScreen';
import ConfirmationScreen from '../screens/therapy/ConfirmationScreen';

const Stack = createStackNavigator();

const TherapyStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Therapy" component={TherapyScreen} />
      <Stack.Screen name="TherapyBooking" component={TherapyBookingScreen} />
      <Stack.Screen name="Packages" component={PackagesScreen} />
      <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
    </Stack.Navigator>
  );
};

export default TherapyStackNavigator;
