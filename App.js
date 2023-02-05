import React from 'react' 
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';

import Chat from './screens/Chat'
import Login from './screens/Login'

const Stack = createStackNavigator();

function ChatStack() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* <Stack.Screen name="Chat" component={Chat} /> */}
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

function RootNavigator() {
    return (
        <NavigationContainer>
            <ChatStack />
        </NavigationContainer>
    )
}

export default function App() {
  return <RootNavigator />
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
