import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,TextInput,Dimensions } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.top} >
          <Text style={styles.textTop}>CODE</Text>
      </View>
      <View style= {styles.title} >
          <Text style={styles.textTitle}>VERIFICATION</Text>
      </View>
      <View style= {styles.title2} >
          <Text style={styles.textTitle2}>Enter ontime password sent on</Text>
          <Text style={styles.textTitle2}>++849092605798</Text>
      </View>
      <View style= {styles.inputs}> 
      {/* // Ẩn nội dung nhập liệu secureTextEntry={true} */}
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style ={styles.button}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C7F4F6',
    justifyContent: 'center',
    alignItems:'center'
  },
  top:{
    marginBottom:52
  },
  textTop:{
    fontSize:60,
    fontWeight:'bold'
  },
  title :{
    marginBottom:52
  },
  textTitle:{
    fontSize:20,
    fontWeight:'bold'
  },
  title2 :{
    marginBottom:24
  },
  textTitle2:{
    textAlign: 'center',
    fontSize:16,
    fontWeight:'200'
  },
  inputs:{
    flexDirection:'row',
    marginBottom:24,
    marginTop:12
  },
  input:{
    height: 50,
    width: 50,
    borderWidth: 1,
    padding: 5,
    textAlign: 'center',
    
  },
  buttons:{
    marginTop: 24,
  },
  button:{
    backgroundColor:'#e3c100',
    width: width * 0.9,  // 90% chiều rộng
    padding: 15,
    borderRadius: 2,
    alignItems: 'center',
    marginTop:12
  },
  buttonText:{
    fontSize: 18,
    fontWeight:'bold'
  }
});