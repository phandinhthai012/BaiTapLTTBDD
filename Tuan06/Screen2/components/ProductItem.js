import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ProductItem = ({ obj }) => {
  const {url, title, price, discount} = obj
  return (
    <View style={styles.content}>
      <Image source={url}/>
      <View>
        <Text style={{marginVertical: 5}}>{title}</Text>
        <View style={styles.start}>
          <Image source={require('../assets/images/Star4.png')} />
          <Image source={require('../assets/images/Star4.png')} />
          <Image source={require('../assets/images/Star4.png')} />
          <Image source={require('../assets/images/Star4.png')} />
          <Image source={require('../assets/images/Star4.png')} />
          <Image source={require('../assets/images/Star5.png')} />
          <Text>(15)</Text>
        </View>
        <View style={styles.viewPrice}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.discount}>{discount}</Text>
        </View>
      </View>
    </View>
  )
}
export default ProductItem

const styles = StyleSheet.create({
  content: {
    width: 160,
    margin: 10,
    marginRight:16

  },
  start: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  price: {
    color: 'black',
    fontWeight: 'bold'
    
  },
  discount: {
    color: '#9ca1a5',
    
  },
  viewPrice: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent:'space-between'
  }
})