import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {LinearGradient} from 'expo-linear-gradient'

const Login = () => {
    const [content,setContent] = useState("FORGOT PASSWORD")
    var checkUser = (user, pass) =>{
        if(user === "iuh" && pass === "123"){
            return true;
        }
        return false;
    };
    const [us, setus] = useState("")
    const [pas, setpas] = useState("")
    var changeUS = (newText)=>{
        setus(newText)
    }
    var changePS = (newText)=>{
        setpas(newText)
    }
    var fn = () => {
        if(checkUser(us,pas)){
            setContent("LOGIN SUCCESSFUL")
        }else{
            setContent("LOGIN FAILED")
        }
    }
  return (
    <LinearGradient colors={['#FBCB00', '#BF9A00']} style={styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.title}>Login</Text>
            </View>
            <View style ={styles.groupInput}>
                <View style ={styles.inputs}>
                    <Image source={require('../../assets/avatar_user.png')}
                             />
                    <TextInput style = {styles.textInput} placeholder='Name' 
                                onChangeText ={(text)=>changeUS(text)}
                                   />
                </View>
                <View style ={styles.inputs}>
                    <Image source={require('../../assets/lock.png')} />
                    <TextInput style = {styles.textInput}placeholder='Password' secureTextEntry={true}
                                        onChangeText={(text) =>changePS(text)} />
                    <Image style = {styles.imgEye} source={require('../../assets/eye.png')} />
                </View>
            </View>
            <View style ={styles.btns}>
                <TouchableOpacity style = {styles.btn} onPress ={fn} >
                    <Text style = {styles.textBtn}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.bottom}>
                <Text style = {styles.create}>{content}</Text>
            </View>
        </LinearGradient>
        );
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:12
    },
    header:{
        padding:8,
        marginBottom:64,
        marginTop:64,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'black',
        textAlign:'left'
    },
    groupInput:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:16,
    },
    inputs:{
        flexDirection: 'row',
		height: 54,
		paddingHorizontal: 10,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'white',
		width: '90%',
		marginVertical: 20,
    },
    textInput:{
        width: '70%',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
        marginRight:12
    },
    btns: {
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 32,
        marginTop:16
    },
    btn:{
        width: '90%',
		height: 45,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 20,
		borderRadius: 5,
    },
    textBtn:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    },
    bottom:{
        alignItems:'center',
        justifyContent:'center'
    },
    create:{
        fontSize:20,
        color:'black',
        fontWeight:'bold'
    }
})