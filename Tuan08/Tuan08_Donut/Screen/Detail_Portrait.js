import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
const Detail_Portrait = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const imageMap = {
    'tasty_donut1.png': require('../assets/images/tasty_donut1.png'),
    'green_donut1.png': require('../assets/images/green_donut1.png'),
    'donut_yellow1.png': require('../assets/images/donut_yellow1.png'),
    'donut_red2.png': require('../assets/images/donut_red2.png'),

  };
  const { id, name, price, description, img } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Image source={imageMap[img]} style={{ width: 272, height: 278, borderRadius: 10, marginBottom:20 }} />
      </View>
      <View>
        <Text style={styles.itemname}>{name}</Text>
        <View style={styles.itemprice}>
          <Text style={styles.itemdes}>{description}</Text>
          <Text style={styles.itemname}>${price}</Text>
        </View>
        <View style={styles.infoDeliver}>
          <View style={styles.timeDeliver}>
            <View style ={{flexDirection:'row'}}>
              <Image style={styles.imgtime} source={require('../assets/images/Vector.png')} />
              <Text style={styles.itemdes}>Delivery in</Text>
            </View>
            <Text style={styles.itemname}>30 min</Text>
          </View>
          <View style={styles.quanlity}>
            <Image source={require('../assets/images/Group16.png')} />
            <Text style={styles.itemname}>1</Text>
            <Image source={require('../assets/images/Group15.png')} />
          </View>
        </View>
        <View>
          <Text style={styles.itemname}>Restaurants info</Text>
          <Text style={styles.itemdes}>
            Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
        </View>
      </View>
      <View style={styles.viewbtn}>
        <Pressable style={styles.btn}>
          <Text style={styles.txtbtn}>Add to cart</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Detail_Portrait

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding:8
  },
  itemname:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:20
  },
  itemdes:{
    fontSize:14,
    fontWeight: 'bold',
    color:'#6f6363',
    marginBottom:20
  },
  itemprice:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop:10,
    marginBottom:10,
    width: '100%',
  },
  infoDeliver:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop:10,
    marginBottom:10,
    width: '100%',
    paddingHorizontal: 10,
  },
  timeDeliver:{
    alignItems: 'center',
    marginHorizontal: 10,
  },
  imgtime:{
    marginRight:8
  },
  quanlity:{
    width:100,
    flexDirection:'row',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent:'space-between',
  },
  viewbtn:{
    marginTop:30,
    width:'100%',
    padding:10,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:10,
    // backgroundColor:'#f1af00',
  },
  btn:{
    backgroundColor:'#f1af00',
    width:'95%',
    height:58,
    justifyContent:'center',
    alignItems: 'center',
  },
  txtbtn:{
    fontSize:25,
    fontWeight: 'bold',
    color:'#fff',
    textAlign:'center',
    paddingVertical:10,
    paddingHorizontal:20,
  }
  // Add your own styles here if needed. For example, to resize the image based on the screen width:
})