import { Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './Screen/Screen01';
import Screen02 from './Screen/Screen02'
import Screen03 from './Screen/Screen03'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="screen01"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="screen01" component={Screen01} />
        <Stack.Screen name="screen02" component={Screen02} />
        <Stack.Screen name="screen03" component={Screen03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
