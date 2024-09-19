import { StyleSheet, Text, View , Image,TouchableOpacity,Button} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useRoute, CommonActions} from '@react-navigation/native'

const Screen1 = ({navigation}) => {
  const route = useRoute();
  const selectedProduct = route.params?.product;
  return (
    <View style ={styles.conatiner}>
      <View styles= {styles.viewImg}>
        {selectedProduct !=null ?(<Image source = {{uri:selectedProduct.img}} style ={styles.imageProduct}/>):(
             <Image source = {require('../assets/images/vs_blue.png')} style ={styles.imageProduct}/>
        )}
       
      </View>
      <View style={{width:'100%',paddingLeft:26, marginTop:16}}>
          <Text style={styles.textNameVS} >Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>
      
      <View style= {styles.rating}>
        <View style={styles.ratingView} >
          <Image source = {require('../assets/images/star.png')} style = {styles.imgStar}/>
          <Image source = {require('../assets/images/star.png')} style = {styles.imgStar}/>
          <Image source = {require('../assets/images/star.png')} style = {styles.imgStar}/>
          <Image source = {require('../assets/images/star.png')} style = {styles.imgStar}/>
          <Image source = {require('../assets/images/star.png')} style = {styles.imgStar}/>
        </View>
        <Text style={styles.textRating}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.priceview}>
        <View style= {styles.price2}> 
          <Text style={styles.textPrice}>1.790.000 đ</Text>
          <Text style={styles.textPriceOld}>1.790.000 đ</Text>
        </View>
        <View  style= {styles.price2}> 
          <Text style={styles.textSale}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Image source={require('../assets/images/Group1.png')} style={styles.imgeGr}/>
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn}
                          onPress= {()=>{
                            navigation.navigate('Details',{
                              url:'../assets/images/vs_blue.png', 
                              name:'Điện Thoại Vsmart Joy 3 - Hàng chính hãng'
                            })
                          }}
        >
          <Text style={styles.textBtn}>4 MÀU-CHỌN MÀU</Text>
          <Image source={require('../assets/images/Vector.png')} style={styles.right}/>
        </TouchableOpacity>
        
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btnbuy} 
                          onPress={()=>{
                              console.log(selectedProduct)
                          }}
        >
          <Text style={styles.textBtnB}>CHỌN MUA</Text>
        </TouchableOpacity>
        
      </View>

    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    alignItems:'center',
    paddingTop:16
  },
  viewImg:{
    marginBottom:20
  },
  imageProduct:{
    marginTop:10,
    width:200,
    height:250,
  },
  textNameVS:{
    fontSize:15,
    marginBottom:12
  },
  rating:{
    width:'100%',
    flexDirection:'row',
    paddingLeft:20,
    marginBottom:20
  },
  ratingView:{
    flexDirection:'row',
  },
  imgStar:{
    width:25,
    height:25,
    marginLeft:5,
    resizeMode:'contain'
  },
  textRating:{
    marginTop:5,
    marginLeft:20,
    fontSize:15,
    color:'#9B9B9B'
  },
  priceview:{
    width:'100%',
    paddingLeft:28,
    paddingRight:32,
    
  },
  price2:{
    flexDirection:'row',
    marginBottom:10
  },
  textPrice:{
    fontSize:18,
    color:'#FF0000'
  },
  textPriceOld:{
    fontSize:16,
    color:'#9B9B9B',
    textDecorationLine: 'line-through',
    fontWeight:'bold',
    marginHorizontal:20
  },
  textSale:{
    fontSize:12,
    color:'#FF0000',
     fontWeight:'bold'

  },
  imgeGr:{
    width:18,
    height:18,
    marginHorizontal:15
  },
  btnView:{
    width:'100%',
    marginTop:32,
    alignItems:'center',

    
  },
  btn:{
    borderWidth:1,
    paddingLeft:50,
    width:'90%',
    height:34,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
    borderRadius:10,
    
  },
  textBtn:{
    color:'balck',
    fontSize:15,
    textAlign:'center',
    marginRight:20,
  },
  right:{
    width:14,
    height:14,
    marginLeft:10,
  },
  btnbuy:{
    padding:8,
    width:300,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'red'
  },
  textBtnB:{
    fontSize:20,
    fontWeight:700,
    color:'white'
  }

})