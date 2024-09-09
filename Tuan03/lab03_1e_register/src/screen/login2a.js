
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, CheckBox,TouchableOpacity,Image } from 'react-native';

function Login2(){
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.title}>Login</Text>
            </View>
            <View style ={styles.groupInput}>
                <View style ={styles.inputs}>
                    <Image source={require('../../assets/avatar_user 1.png')} />
                    <TextInput style = {styles.input} placeholder='Name' />
                </View>
                <View style ={styles.inputs}>
                    <Image source={require('../../assets/lock-152879 1.png')} />
                    <TextInput style = {styles.input}placeholder='Password' />
                </View>
            </View>
            <View style ={styles.btns}>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.textBtn}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.bottom}>
                <Text style = {styles.create}>CREATE ACCOUNT</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8c901',
        padding:12
      },
      header:{
        justifyContent:'flex-start',
        marginTop: 52,
        marginBottom:52,
        marginLeft:22
      },
      title:{
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 30
      },
      groupInput:{
        marginBottom:32
      },
      inputs:{
        flexDirection: 'row',
        width: '90%',
		height: 54,
		alignItems: 'center',
		justifyContent: 'flex-start',
        backgroundColor:'#dcbe3a',
        borderWidth:1,
        borderColor:'#e7e5e6',
        padding:12,
        margin:16
		
      },
      input:{
        padding:8,
        marginLeft:10,
      },
      btns:{
        justifyContent: 'flex-end',
        marginBottom: 24,
      },
      btn:{
        width:'90%',
        height: 54,
        backgroundColor: 'black',
        marginLeft:16,
        alignItems: 'center',
        justifyContent: 'center'
      },
      textBtn: {
        fontSize:30,
        fontWeight: 'bold',
        color: 'white'
      },
      bottom:{
        margin:12,
        alignItems: 'center'
      },
      create:{
        fontSize:16,
        fontWeight: 'bold',
        color: 'black'
      }
});

export default Login2;