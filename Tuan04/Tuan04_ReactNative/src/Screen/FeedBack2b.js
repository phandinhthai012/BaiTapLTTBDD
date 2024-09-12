import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

const FeedBack2b = () => {
  const [comment, setComment] = useState('');
  return (
    <View style ={styles.container}>
      <View style = {styles.header}>
        <View style = {styles.img}>
          <Image source={require("../../assets/usb.png")}/>
        </View>
        <Text style = {styles.textHeader}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
      </View>
      <View style={styles.Rate}>
        <Text style= {styles.textRate}>Cực kỳ hài lòng</Text>
        <View style= {styles.RateStars}>
            <Image source={require("../../assets/Star.png")}/>
            <Image source={require("../../assets/Star.png")}/>
            <Image source={require("../../assets/Star.png")}/>
            <Image source={require("../../assets/Star.png")}/>
            <Image source={require("../../assets/Star.png")}/>
        </View>
      </View>
      <View style={styles.AddImg}>
        <Image source={require('../../assets/camera.png')} />
        <Text style={styles.textAddImg}>Thêm hình ảnh</Text>
      </View>
      <View style={styles.Send}>
        <TextInput style={styles.textarea}
                  multiline={true}
                  numberOfLines={4}
                  placeholder={`Hãy chi sẻ những điều mà bạn thích về sản phẩm`}
                  placeholderTextColor={'#C4C4C4'}
                  onChangeText={(newtext)=>setComment(newtext)}/>
        <Text style={styles.sendText}>https://meet.google.com/nsj-ojwi-xpp</Text>
      </View>
      <View style ={styles.btns}>
        <TouchableOpacity style= {styles.btn}
                          onPress={()=>{alert(comment)}}>
          <Text style={styles.btnText}>Gửi</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default FeedBack2b

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  img: {
    marginRight: 16,
  },
  textHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  Rate: {
    marginBottom: 32,
    alignItems: 'center',
    marginTop: 16,
    
  },
  textRate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  RateStars: {
    flexDirection: 'row',
  },
  AddImg: {
    flexDirection: 'column',
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
		borderColor: 'blue',
		width: '90%',
		height: 80,
		borderRadius: 10,
    padding:30

  },
  textAddImg:{
    marginLeft: 10,
		fontSize: 17,
		fontWeight: 'bold',
  },
  Send: {
    marginBottom: 16,
    width: '90%',
		borderWidth: 1,
		borderColor: '#C4C4C4',
		borderRadius: 10,
  },
  textarea: {
    height: 220 ,width: '98%',
    textAlignVertical: 'top',
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  sendText: {
    marginBottom: 16,
    alignSelf: 'flex-end',
  },
  btns: {
    alignItems: 'center',
    width: '90%',
   	justifyContent: 'center',
    marginTop:24
  },
  btn: { 
    width: '100%',
		backgroundColor: '#0d5db6',
	  height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
  },
  btnText: {
    fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
  }
})