// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStaticNavigation,NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './screens/login';
import Signup from './screens/signup';

const Stack=createNativeStackNavigator()
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Loginscreen}/>
        <Stack.Screen name='signup' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;