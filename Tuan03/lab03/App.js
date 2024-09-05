import React from 'react';
import {StyleSheet,Text, View,Image,TouchableOpacity} from 'react-native';

const FirstApp = () => {
  return (
    <View style= {styles.container}>
      <View style ={styles.como}>
        <Image style = {styles.circle} source ={require('./assets/Ellipse 8.png')}/>
      </View>
       <View style ={styles.como}>
          <Text style = {[styles.text,styles.fonSize1]}>GROW YOURS BUSINESS</Text>
       </View>
       <View style ={styles.como}>
          <Text style = {[styles.text,styles.fonSize2]}>We will help you to grow your business using online server</Text>
       </View>
        <View style ={styles.btns}>
          <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed!')}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed!')}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
       </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#00CCF9',
    padding:24,
    justifyContent:'center',
  },
  como :{
    alignItems:'center',
    marginBottom:48
  },
  circle: {
    height:140,
    width:140,
    padding:75,
    margin:24
    
  },
  text: {
    fontFamily: 'bold',
    fontWeight:800,
    textAlign:'center'
  },
  fonSize1:{
    fontSize:25,
    lineHeight:29,
  },
  fonSize2:{
    fontSize:16,
    lineHeight:18,
  },
  btns:{
    flex :1,
    marginTop:32,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center'

  },
  button: {
    backgroundColor: '#e3c100',  // Màu nền của button
    padding: 13,
    height:48,
    width:119,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonText: {
    color: '#000000',  // Màu chữ của button
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default FirstApp;