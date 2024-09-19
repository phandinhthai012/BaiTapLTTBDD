import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator
              initialRouteName='Home'
              screenOptions={{
                headerShown: false
              }}
      >
        <Stack.Screen name="Home" component={Screen1} />
        <Stack.Screen name="Details" component={Screen2} />
      </Stack.Navigator>
   </NavigationContainer>
  );
  // return <Screen2/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
