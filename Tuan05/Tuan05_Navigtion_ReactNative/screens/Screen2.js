import { StyleSheet, Text, View,Button, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useRoute,CommonActions } from '@react-navigation/native'



const data = {
	phoneBlue: {
		img: '../assets/images/vs_blue.png',
		name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
		color: 'xanh',
		order: 'Cung cấp bởi Tiki Tradding',
		price: '1.790.000 đ',
	},
	phoneRed: {
		img:'../assets/images/vs_red.png',
		name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
		color: 'đỏ',
		order: 'Cung cấp bởi Tiki Tradding',
		price: '1.790.000 đ',
	},
	phoneBlack: {
		img: '../assets/images/vs_black.png',
		name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
		color: 'đen',
		order: 'Cung cấp bởi Tiki Tradding',
		price: '1.790.000 đ',
	},
	phoneSilver: {
		img: '../assets/images/vs_silver.png',
		name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
		color: 'Trắng',
		order: 'Cung cấp bởi Tiki Tradding',
		price: '1.790.000 đ',
	},
}

const Screen2 = ({navigation}) => {
  const route = useRoute();
  const {url,name} =route.params
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [urlImg, setUrlImg] = useState(url)
  const handlePress = (product) => {
    setSelectedProduct(product);
    setUrlImg(product.img);
  };
  const handleConfirm = (product) => {
    // navigation.navigate('Home', {product});
    // // navigation.goBack();
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{name: 'Home', params: {product}}],
    }));
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri:urlImg} } style={styles.imageProduct} />
        <View>
          <Text style={styles.Name}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
          {selectedProduct && (
            <View style={styles.information}>
              <Text style={styles.color}>Màu: {selectedProduct.color}</Text>
              <Text style={styles.order}>{selectedProduct.order}</Text>
              <Text style={styles.price}>{selectedProduct.price}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.listProduct}>
          <View>
            <Text>Chọn một màu bên dưới:</Text>
          </View>
          <View style ={styles.listColor}>
              <TouchableOpacity style={[styles.white, styles.btn]}
                                onPress={() => handlePress(data.phoneSilver)}
              >

              </TouchableOpacity>
              <TouchableOpacity style={[styles.red, styles.btn]}
                                onPress={() => handlePress(data.phoneRed)}
              
              >

              </TouchableOpacity>
              <TouchableOpacity style={[styles.black, styles.btn]}
                                onPress={() => handlePress(data.phoneBlack)}
              >

              </TouchableOpacity>
              <TouchableOpacity style={[styles.blue, styles.btn]}
                                onPress={() => handlePress(data.phoneBlue)}
              >

              </TouchableOpacity>
          </View>
          <View style={styles.done}>
              <TouchableOpacity style ={styles.btnDone}
                        onPress={() => {
                          // 
                          handleConfirm(selectedProduct);
                        }}
              >
                  <Text style={styles.textDone}>XONG</Text>
              </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    padding:10,
    marginBottom: 20,
  },
  imageProduct: {
    width: 112,
    height: 140,
    marginRight: 10,
  },
  Name: {
    width: '70%',
		flexWrap: 'wrap',
		fontSize: 15,
  },
  color: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,

  },
  order: {
    fontSize: 15,
    color: 'gray',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  listProduct: {
    width: '100%',
    paddingLeft: 20,
    backgroundColor: '#c4c4c4',
    paddingBottom:24
  },
  listColor:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 80,
		height: 80,
		marginVertical: 8,
  },
  white: {
    backgroundColor: '#c5f1fa',
  },
  red: {
    backgroundColor: '#f30d0d',
  },
  black: {
    backgroundColor: '#000000',
  },
  blue: {
    backgroundColor: '#234896',
  },
  done: {
    alignItems: 'center',
    marginTop: 20,
  },
  btnDone: {
    width: '90%',
    height: 40,
    backgroundColor: '#4d6dc0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textDone: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
 
})