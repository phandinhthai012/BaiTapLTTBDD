import React from 'react';
import {StyleSheet,Text, View,Image,TouchableOpacity} from 'react-native';

const FirstApp = () => {
  return (
    <View style= {styles.container}>
      <View style= {styles.images} >
           <Image style = {styles.img} source ={require('./assets/Ellipse 8.png')}/>
      </View>
      <View style= {styles.header} >
            <Text style = {styles.textHeader}>GROW</Text>
            <Text style = {styles.textHeader}>YOURS BUSINESS</Text>
      </View>
      <View style= {styles.title} >
            <Text style= {styles.textTitle}>We will help you to grow your business using
online server</Text>
      </View>
      <View style ={styles.btns}>
          <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed!')}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed!')}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
      </View>
      <View style= {styles.header} >
            <Text style= {styles.textbottom}>HOW WE WORK?</Text>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#00CCF9',
    padding:24
  },
  images:{
    alignItems:'center',
    marginTop:24,
    marginBottom:32,
  },
  img: {

  },
  header:{
    marginTop:24,
    marginBottom:12,
    alignItems:'center',
    justifyContent:'center'
  },
  textHeader:{
    fontSize:24,
    fontWeight:'bold'
  },
  title:{
    marginTop:50
  },
  textTitle:{
    textAlign:'center',
    fontSize:12,
    fontWeight:'bold'

  },
  btns:{
    flex :1,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginTop:80
  },
  button: {
    backgroundColor: '#e3c100',  // Màu nền của button
    height:32,
    width:89,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:'center'
    
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight:'bold'
  },
  textbottom:{
    fontSize: 16,
    fontWeight:'bold'
  }
});
export default FirstApp;