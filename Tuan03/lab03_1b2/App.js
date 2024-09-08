import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native';
import { styles } from './styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.lock}>
        <Image source={require('./assets/lock-152879 1.png')}/>
      </View>
      <View style= {styles.TextHeads}>
        <Text style= {styles.Text1} >FORGET</Text>
        <Text style= {styles.Text1} >PASSWORD</Text>
      </View>
      <View style= {styles.TextHeads}>
      <Text style= {styles.Text2} >Provide your account’s email for which you want to reset your password</Text>
      </View>
      <View style= {styles.inputs}>
      <Image  style ={styles.inputImg} source={require('./assets/mail-2935365 1.png')}/>
        <TextInput style={styles.input} secureTextEntry= {true} placeholder='Email'/>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style ={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
}

