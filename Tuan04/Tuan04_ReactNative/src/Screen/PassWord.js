import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';


const PassWord = () => {
  const [length, setLength] = useState("");
  const [includeLowercase, setIncludeLowercase] = React.useState(false);
  const [includeUppercase, setIncludeUppercase] = React.useState(false);
  const [includeNumber, setIncludeNumber] = React.useState(false);
  const [includeSymbol, setIncludeSymbol] = React.useState(false);
  const [password, setPassword] = useState('');
  const aphaLowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const aphaUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = "0123456789"; // số 
  const symbols = "!@#$%^&*_-+="; // ký tự đặc biệt
  var generatePassword = (length, includeLowercase, includeUppercase, includeNumber, includeSymbol) => {
    if(length == ''){
      alert('Please enter password length');
      return;
    }
    let num = parseInt(length);
    let char = '';
    if(includeLowercase){
      char += aphaLowerCase;
    }
    if(includeUppercase){
      char += aphaUpperCase;
    }
    if(includeNumber){
      char += numbers;
    }
    if(includeSymbol){
      char += symbols;
    }
    let pass = '';
    for(var i=0; i<num; i++){
       pass += char.charAt(Math.floor(Math.random() * char.length+1));
        
    }
    return pass;
    }
  return (
//     radom create passwords
    <LinearGradient colors={['#9496bd','#5e5ea6', '#9496bd']} style = {styles.container}>
        <View style = {styles.body}>
            <View style = {styles.header}>
                <Text style = {styles.textHeader}>PASSWORD{'\n'}GENERATOR</Text>
            </View>
            <View style = {styles.header}>
                <TextInput style = {styles.inputHeader}
                            value={password}
                            />
            </View>
            <View style ={styles.bodyAction}>
                <View style = {styles.length}>
                    <Text style = {styles.textLenght}>Password length</Text>
                    <TextInput style= {styles.inputLength}
                                value={length}
                                onChangeText={(newtext)=>{
                                     setLength(newtext);
                                }}/>
                </View>
                <View style = {styles.length}>
                    <Text style = {styles.textLenght}>Include lower case letters </Text>
                    <Checkbox style = {styles.checkconditon}
                                value = {includeLowercase}
                                onValueChange = {setIncludeLowercase}/>
                </View>
                <View style = {styles.length}>
                    <Text style = {styles.textLenght}>Include upcase letters </Text>
                    <Checkbox style = {styles.checkconditon}
                                value = {includeUppercase}
                                onValueChange = {setIncludeUppercase}/>
                </View>
                <View style = {styles.length}>
                    <Text style = {styles.textLenght}>Include number </Text>
                    <Checkbox style = {styles.checkconditon}
                                value = {includeNumber}
                                onValueChange = {setIncludeNumber}/>
                </View>
                <View style = {styles.length}>
                    <Text style = {styles.textLenght}>Include special symbol </Text>
                    <Checkbox style = {styles.checkconditon}
                                value = {includeSymbol}
                                onValueChange = {setIncludeSymbol}/>
                </View>

                <View style = {styles.btns}>
                    <TouchableOpacity style = {styles.btn} onPress={()=>{
                        setPassword(generatePassword(length, includeLowercase, includeUppercase, includeNumber, includeSymbol));
                    }}>
                        <Text style= {styles.textbtn}>GENERATE PASSWORD </Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>


    </LinearGradient>
  )
}

export default PassWord

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    body:{
        flex: 1,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#22235b',
        padding: 10,
    },
    header:{
        marginTop:28,
        alignItems: 'center',
        padding: 2,
    },
    textHeader:{
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    inputHeader:{
        backgroundColor:'#151537',
        width: '99%',
		height: 45,
		color: 'white',
		fontSize: 18,
    },
    bodyAction:{
        marginTop:32,
        alignSelf: 'center',
        width: '100%',
        padding:4
    },
    length:{
        flexDirection: 'row',
        alignItems: 'center',
		justifyContent: 'space-between',
        marginTop: 16,
        marginBottom: 16,
    },
    textLenght:{
        fontSize:20,
        color: 'white',
        fontWeight: 'bold',
    },
    inputLength:{
        backgroundColor:'#151537',
        width: 150,
		height: 40,
		backgroundColor: 'white',
		textAlign: 'center',
		fontSize: 20,
    },
    checkconditon:{
        width: 25,
		height: 25,
		backgroundColor: 'white',
    },
    btns:{
        marginTop:32

    },
    btn:{
        width: '90%',
        height: 54,
        backgroundColor: '#3c3b98',
        marginLeft:16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textbtn: {
        fontSize:18,
        fontWeight: 'bold',
        color: 'white'
    }
})