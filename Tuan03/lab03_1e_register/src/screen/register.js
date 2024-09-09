// screens/Register.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, CheckBox,TouchableOpacity,Image } from 'react-native';

const Register = () => {
   return (
    <View style = {styles.container}>
      <View style={styles.header}>
				<Text style={styles.textHeader}>REGISTER</Text>
			</View>
			<View style = {styles.content}>
				<View style={styles.textInputStyles}>
					<TextInput placeholder="Name" placeholderTextColor={'black'}/>
				</View>
				<View style={styles.textInputStyles}>
					<TextInput placeholder="Phone" placeholderTextColor={'black'}/>
				</View>
				
				<View style={styles.textInputStyles}>
					<TextInput placeholder="Email" placeholderTextColor={'black'}/>
				</View>

				<View style={styles.textInputStyles}>
        <TextInput placeholder="Password" placeholderTextColor={'black'}/>
					<Image source={require('../../assets/eye 1.png')} />
				</View>
				<View style={styles.textInputStyles}>
        <TextInput placeholder="Name" placeholderTextColor={'black'}/>
				</View>
				<View  style={styles.groucheck}>
					<View  style={styles.check}>
						<CheckBox style = {styles.btnCheck}/>
						<Text style = {styles.txtCheck}>Male</Text>
					</View>
					<View  style={styles.check}>
						<CheckBox style = {styles.btnCheck}/>
						<Text style = {styles.txtCheck}>Female</Text>
					</View>
				</View>
			</View>
			<View style = {styles.bottom}>
				<TouchableOpacity style= {styles.btn}>
					<Text style ={styles.textbtn}>REGISTER</Text>
				</TouchableOpacity>
				<Text style= {styles.btnB} >When you agree to terms and conditions</Text>
			</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex: 15,
    justifyContent:'flex-end'
  },
  textHeader:{
    fontSize: 25,
    fontWeight: 'bold',
  },
  content:{
    flex: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  textInputStyles: {
		flexDirection: 'row',
		width: '90%',
		height: 54,
		backgroundColor: '#C4C4C4',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		marginBottom: 25,
	},
  groucheck:{
    flexDirection: 'row',
		justifyContent: 'flex-start',
		width: '90%',
		paddingHorizontal: 20,
  },
  check:{
    flexDirection:'row',
    marginRight:50
  },
  btnCheck:{
    width: 20,
		height: 20,
		borderRadius: 50,
		marginRight: 8,
							
  },
  bottom:{
    flex: 25, alignItems: 'center' 
  },
  btn:{
    width: '90%',
		alignItems: 'center',
		height: 45,
		justifyContent: 'center',
		backgroundColor: '#E53935',
		borderRadius: 2,
		marginTop: 30,
  },
  textbtn:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnB:{
    marginTop: 15
  },
});

export default Register;
