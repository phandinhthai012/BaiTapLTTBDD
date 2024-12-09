import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {Provider} from 'react-redux'
import store from './store'
import Screen01 from './screen01'
import Screen02 from './screen02'

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName ='screen02'
        >
          <Stack.Screen
            name='screen01'
            component={Screen01}
            options={{title:'screen01',headerShown:false}}
          />
           <Stack.Screen
            name='screen02'
            component={Screen02}
            options={{title:'screen02',headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
