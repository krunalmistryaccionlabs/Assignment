import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './app/Screens/homeScreen';
import ViewCode from './app/Screens/viewCode';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="viewCode" component={ViewCode}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}