import React from 'react';
import {StyleSheet,Text, View,Image,Button} from 'react-native';

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
        <View style ={[styles.btns,styles.como]}>
         <Button title = 'LOGIN' style = {styles.btn} color='#e3c100'/>
         <Button title = 'SiGN UP'style = {styles.btn}color='#e3c100'/>
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
    margin:24
  },
  circle: {
    height:140,
    width:140,
    padding:75,
    margin:24
    
  },
  text: {
    fontFamily: 'Roboto',
    fontWeight:700,
    
    textAlign:'center'
  },
  fonSize1:{
    fontSize:25,
    lineHeight:29.3,
  },
  fonSize2:{
    fontSize:15.5,
    lineHeight:17.58,
  },
  btns:{
    flex :1,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  btn :{
    fontSize: 15,
    width:119,
    height:48,
  }
 
});
export default FirstApp;