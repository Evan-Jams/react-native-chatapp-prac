import React from 'react' 
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';

import Chat from './screens/Chat'

const Stack = createStackNavigator();

function ChatStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Chat" component={Chat} />
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
