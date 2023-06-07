import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import OnBoard from '../screens/OnBoard';
import Profile from '../screens/Profile';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="onBoard"
        component={OnBoard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default MyStack;
