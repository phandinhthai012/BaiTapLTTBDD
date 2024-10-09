import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Master_Portrait from './Screen/Master_Portrait';
import Detail_Portrait from './Screen/Detail_Portrait';

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="firtScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="firtScreen" component={Master_Portrait} />
        <stack.Screen name="secondScreen" component={Detail_Portrait} />

      </stack.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
