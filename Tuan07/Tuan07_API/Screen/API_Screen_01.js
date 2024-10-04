import { StyleSheet, Text, View , Image, StatusBar,TextInput, TouchableOpacity} from 'react-native'
import React from 'react';
import { useNavigation,useRoute } from '@react-navigation/native';

const API_Screen_01 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View  style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.imageContainer}>
            <Image source={require('../assets/img/Image95.png')} />
        </View>
        <View style={styles.txtView}>
           <Text style={styles.txt}>MANAGE YOUR TASK</Text>
        </View>
        <View style={styles.inputView}>
            <Image style={styles.imgEmails} source={require('../assets/img/email.png')}/>
            <TextInput style={styles.txtInput} placeholder="Enter your email..."/>
        </View>
        <View style={styles.btnview}>
            <TouchableOpacity style={styles.btnopacity}
                              onPress= {() => {
                                navigation.navigate('Screen02');                             
                              }}
            
            >
                <Text style={styles.btnText}>GET STARTED</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}

export default API_Screen_01

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding:14,
        justifyContent: 'center',
      },
      imageContainer: {
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      },
      txtView: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        alignItems: 'center',
      },
      txt: {
        fontSize: 24,
		fontWeight: 'bold',
		color: 'rgba(131, 83, 226, 1)',
		textAlign: 'center',
		width: 180,
      },
      inputView: {
        marginTop:30,
        width: '90%',
        height: 43,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
      },
      imgEmails: {
        marginTop: 5,
      },
      txtInput: {
        alignSelf: 'center',    
        marginLeft: 10,
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.6)',
        width: '80%',
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
      },
      btnview: {
        backgroundColor: 'rgba(0, 189, 214, 1)',
						width: 190,
						height: 44,
						borderRadius: 12,
						alignItems: 'center',
						justifyContent: 'center',
                        marginTop: 40,
      },
      btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },

})