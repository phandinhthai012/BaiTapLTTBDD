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
    <View style = {styles.title}>
      <Text style= {styles.textTitle}>When you agree to terms and conditions</Text>
      <Text style= {[styles.textTitle,styles.colorT]}>For got your password?</Text>
      <Text style= {styles.textTitle}>Or login with</Text>
    </View>
    <View style= {styles.logo}>
      <TouchableOpacity>
        <Image source={require('./assets/Facebook.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('./assets/Zalo.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('./assets/GG.png')}/>
      </TouchableOpacity>
    </View>

    </View>
  );
}

