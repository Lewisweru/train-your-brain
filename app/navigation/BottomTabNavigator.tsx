
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import TherapyStackNavigator from './TherapyStackNavigator';
import { RouteProp } from '@react-navigation/native';

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }: { route: RouteProp<Record<string, object | undefined>, string> }) => ({
        tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
          let iconName: string | undefined;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Therapy') {
            iconName = focused ? 'brain' : 'brain';
          }

          if (iconName) {
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          }

          return null;
        },
        tabBarActiveTintColor: '#667EEA',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Therapy" component={TherapyStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
