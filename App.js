import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput, TouchableHighlight, Platform, StatusBar } from 'react-native';
import LoginScreen from './src/components/LoginScreen/LoginScreen';
import SignUpScreen from './src/components/SignUpScreen/SignUpScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import ForgotPassword from './src/components/ForgotPassword/ForgotPassword';
const Stack = createStackNavigator()
export default function App() {
  // const [isSignUp, setIsSignUp] = useState(false)

  // const switchScreen = () => {
  //   setIsSignUp(!isSignUp)
  // }
  return (
    <NavigationContainer>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
      />
      <Stack.Navigator screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword}
          options={{
            color: "transparent",
            headerShown: true,
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }} />
      </Stack.Navigator>
      {/* <View style={styles.screen}>
        {isSignUp ? <SignUpScreen switchScreen={switchScreen} /> : <LoginScreen switchScreen={switchScreen} />}
      </View> */}
    </NavigationContainer>
  )
}