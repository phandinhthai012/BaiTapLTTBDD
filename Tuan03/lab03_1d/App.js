import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput, Image,TouchableOpacity} from 'react-native';

import styles from './styles/style';

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.top} >
          <Text style={styles.textTop}>LOGIN</Text>
      </View>
    <View style= {styles.inputs}>
      <TextInput style={styles.input}placeholder='Email'/>
    </View>
    <View style= {styles.inputs}>
      <TextInput style={styles.input} secureTextEntry= {true} placeholder='PassWord'/>
      <Image  style ={styles.inputImg} source={require('./assets/icons8-eye-50.png')}/>
    </View>
    <View style={styles.buttons}>
        <TouchableOpacity style ={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
    </View>

    </View>
  );
}

