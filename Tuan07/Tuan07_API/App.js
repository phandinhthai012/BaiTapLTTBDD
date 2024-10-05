import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import API_Screen_01 from './Screen/API_Screen_01';
import API_Scree2_02 from './Screen/API_Screen_02';
import API_Screen_03 from './Screen/API_Screen_03';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="firtScreen"
        screenOptions={{
          headerShown: false,
      }}
    >
        <Stack.Screen name="firtScreen" component={API_Screen_01} />
        <Stack.Screen name="Screen02" component={API_Scree2_02} />
        <Stack.Screen name="Screen03" component={API_Screen_03} />
      </Stack.Navigator>
    </NavigationContainer>
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
