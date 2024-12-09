import { Text, SafeAreaView, StyleSheet,View,Image,TouchableOpacity,TextInput } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer,useNavigation} from '@react-navigation/native'
// import {useNavigation} from '@react-navigation/native'
import react,{useState} from 'react'
export default function Screen01() {
  const data =[
    {name:'abc',pass:'123'},
  ]
  const [name,setName] = useState('')
  const [pass,setPass] = useState('')
  const navigation= useNavigation();
  const handleLogin =()=>{
    const user = data.find((item)=> item.name===name && item.pass===pass)
    if(user){
      navigation.navigate('screen02')
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{width:'98%',flexDirection:'row',justifyContent:'space-between'}}>
        <Image style={{height:20,width:20}} source={require('./Data/eye.png')}/>
      </TouchableOpacity>
      <Image style={{marginTop:30}} source={require('./Data/icon.png')}/>
      <Text style={{fontSize:20,fontWeight:'bold',marginTop:10}}>Hello Again</Text>
      <Text style={{fontSize:12,fontWeight:'400',marginTop:4,color:'gray'}}>Log into your account</Text>
      <View style={{width:'100%',marginTop:30,padding:8}}>
        <View style={{width:'100%',flexDirection:'row',alignItems:'center',height:32,borderWidth:1,padding:8,gap:5,borderRadius:5,marginVertical:10}}>
          <Image style={{height:15,width:20}} source={require('./Data/Vector.png')}/>
          <TextInput 
             onChangeText={(text)=>{
                setName(text)
            }}
            style={{width:'90%'}} placeholder='enter your email address' placeholderTextColor='gray'/>
        </View>
        <View style={{width:'100%',flexDirection:'row',alignItems:'center',height:32,borderWidth:1,padding:8,gap:5,borderRadius:5}}>
          <Image style={{height:15,width:20}} source={require('./Data/lock.png')}/>
          <TextInput 
            onChangeText={(text)=>{
                setPass(text)
            }}
            style={{width:'90%'}} placeholder='enter your password' placeholderTextColor='gray'/>
          <Image style={{height:15,width:20}} source={require('./Data/eye.png')}/>
        </View>
      </View>
      <View style={{width:'95%',marginTop:2,marginBottom:20}}>
          <Text style={{fontSize:12,color:'blue',textAlign:'right'}}>forgot password?</Text>
      </View>
      <TouchableOpacity
          onPress={()=>{
            handleLogin()
          }}
          style={{width:'95%',backgroundColor:'#1ce5ff',alignItems:'center',justifyContent:'center',padding:10,borderRadius:5}}
      >
        <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}>Continue</Text>
      </TouchableOpacity>
      <View style={{width:'95%',marginTop:10,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}>_________or_________</Text>
      </View>
      <View style={{width:'95%',marginTop:20,alignItems:'center',justifyContent:'center',flexDirection:'row',gap:10}}>
        <Image style={{height:31,width:35}} source={require('./Data/face.png')}/>
        <Image style={{height:31,width:35}} source={require('./Data/apple.png')}/>
        <Image style={{height:31,width:35}} source={require('./Data/google.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 8,
  },
});
