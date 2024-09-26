import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
	FlatList,
	Platform,
} from 'react-native';
const data = [
	{
		image: require('./assets/ca_nau_lau.png'),
		title: 'Ca nấu lẩu, nấu mì mini',
		shopName: 'Devang',
	},
	{
		image: require('./assets/ga_bo_toi.png'),
		title: '1 KG KHÔ GÀ BƠ TỎI',
		shopName: 'LTD Food',
	},
	{
		image: require('./assets/xa_can_cau.png'),
		title: 'Xe cần cẩu đa năng',
		shopName: 'Thế giới đồ chơi',
	},
	{
		image: require('./assets/do_choi_dang_mo_hinh.png'),
		title: 'Đồ chơi dạng mô hình',
		shopName: 'Thế giới đồ chơi',
	},
	{
		image: require('./assets/lanh_dao_gian_don.png'),
		title: 'Lãnh đạo đơn giản',
		shopName: 'Minh Long Book',
	},
	{
		image: require('./assets/trump1.png'),
		title: 'Donald Trump Thiên tài lãnh đạo',
		shopName: 'Minh Long Book',
	},
];

const Item = ({obj}) => (
  <View style={styles.item}>
    <Image source={obj.image} style={styles.imgProdutc}/>
    <View style={styles.viewText}>
      <Text style={styles.textTitle} >{obj.title}</Text>
      <Text style={styles.textsup}>Shop {obj.shopName}</Text>
    </View>
    <View style = {{marginTop:20}}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>chat</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/ant-design_arrow-left-outlined.png')}/>
        <Text  style = {styles.textHeader}>Chat</Text>
        <Image source={require('./assets/bi_cart-check.png')}/>
      </View>
      <View style={styles.ttheader}>
            <Text style={styles.textheader}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngạ chát với shop!</Text>
      </View>
      
        <FlatList
          data={data}
          renderItem={({item}) => <Item obj={item} />}
          // keyExtractor={item => item.id}
        />
     
      <View style={styles.header}>
        <Image source={require('./assets/Group10.png')}/>
        <Image source={require('./assets/home.png')}/>
        <Image source={require('./assets/Vector1(Stroke).png')}/>
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
    width:'100%',
    height:42,
    flexDirection:'row',
    backgroundColor:'#1ba9ff',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:16,
    paddingVertical:10,
  },
  textHeader:{
    fontSize:'18px',
    color:'white',
  },
  ttheader:{
    marginTop:12
  },
  textheader:{
    textAlign:'center',
    fontSize:10,
    paddingLeft:32,
    paddingRight:32

  },
  body:{
  
  },
  item: {
    borderWidth:1,
    borderLeftColor:'white',
    borderRightColor:'white',
    borderColor:'#c4c4c4',
    flexDirection:'row',
    justifyContent:'space-between',
    height:150,
    alignContent:'center',
  },
  imgProdutc:{
    marginTop:12,
    width:74,
    height:74,
  },
  viewText:{
    alignItems:'flex-start',
    justifyContent:'center',
    width:'50%'
  },
  textTitle:{
    fontSize:16,
    
  },
  textsup:{
    fontSize:12,
    color:'#e43031',
  },
  btn:{
    width:88,
    height:38,
    backgroundColor:'#e43031',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    marginTop:10,
    marginRight:4
  },
  textBtn:{
    color:'white',
    fontSize:14,
  }
  
});
