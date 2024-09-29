
import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
	FlatList,
	TextInput,
	Platform,
} from 'react-native';
import ProductItem from './components/ProductItem';


const data = [
	{
		url: require('./assets/images/giacchuyen1.png'),
		title: 'Cách chuyển từ cổng USB sang PS2...',		
		price: '69.000đ',
		discount: '-39%',
	},
	{
		url: require('./assets/images/daynguon1.png'),
		title: 'Cách chuyển từ cổng USB sang PS2...',		
		price: '69.000đ',
		discount: '-39%',
	},
	{
		url: require('./assets/images/dauchuyendoipsps21.png'),
		title: 'Cách chuyển từ cổng USB sang PS2...',		
		price: '69.000đ',
		discount: '-39%',
	},
	{
		url: require('./assets/images/dauchuyendoi1.png'),
		title: 'Cách chuyển từ cổng USB sang PS2...',		
		price: '69.000đ',
		discount: '-39%',
	},
	{
		url: require('./assets/images/carbusbtops21.png'),
		title: 'Cách chuyển từ cổng USB sang PS2...',		
		price: '69.000đ',
		discount: '-39%',
	},

	{
		url: require('./assets/images/daucam1.png'),
		title: 'Cách chuyển từ cổng USB sang PS2',		
		price: '69.000đ',
		discount: '-39%',
	},
	{
		url: require('./assets/images/daucam1.png'),
		title: 'Cách chuyển từ cổng USB sang PS2',		
		price: '69.000đ',
		discount: '-39%',
	},
	{
		url: require('./assets/images/daucam1.png'),
		title: 'Cách chuyển từ cổng USB sang PS2',		
		price: '69.000đ',
		discount: '-39%',
	},
	{
		url: require('./assets/images/daucam1.png'),
		title: 'Cách chuyển từ cổng USB sang PS2',		
		price: '69.000đ',
		discount: '-39%',
	},
];



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/images/ant-design_arrow-left-outlined.png')}/>
        <View style={styles.search}>
          <Image source={require('./assets/images/whh_magnifier.png')}/>
           <TextInput
					  // value="Dây cáp usb"
            placeholder='Dây cáp usb'
					  style={{ width: '80%', paddingLeft: 8 }}
					 />
        </View>
        <View style={styles.cart}>
          <Image source={require('./assets/images/bi_cart-check.png')}/>
          <Image style ={styles.sl} source={require('./assets/images/Ellipse4.png') }/>
        </View>
        <Image source={require('./assets/images/Group2.png')}/>
      </View>
      <FlatList
				data={data}
				renderItem={({ item }) => <ProductItem obj={item} />}
				// keyExtractor={(item) => item.image}
				numColumns={2}
			
			/>
      <View style={styles.bottom}>
        <Image source={require('./assets/images/Group10.png')}/>
        <Image source={require('./assets/images/Vector.png')}/>
        <Image source={require('./assets/images/Vector1.png')}/>  

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header:{
    height: 42,
    width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: '#1ba9ff',
		paddingHorizontal: 15,
  },
  search:{
    flexDirection: 'row',
		backgroundColor: 'white',
		width: 200,
		padding: 5,

  },
  cart:{
    flexDirection:'row',
  },
  sl:{
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 7,
    backgroundColor: 'red',
    right: 0,
  },
  groupItemContainer:{
    alignItems: 'center',
    marginTop:25

  },
  bottom: {
    height: 50,
    width: '100%',
		backgroundColor: '#1ba9ff',
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
  },
});
