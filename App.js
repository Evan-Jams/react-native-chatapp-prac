import React from 'react' 
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';

import Chat from './screens/Chat'

const Stack = createStackNavigator();

function ChatStack() {
    reurn(
        <Stack.Navigator>
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
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
