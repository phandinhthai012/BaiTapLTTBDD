import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

export default function Screen03() {
  const navigation = useNavigation();
  const route = useRoute();
  const { obj } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgitem}>
        <Image source={obj.urlImage} style={styles.img}/>
      </View>
      <Text style={styles.txtName}>{obj.name}</Text>
      <View style={styles.price}>
        <Text style={styles.txtsale}>{obj.saleOff}</Text>
        <Text style={styles.txtPrice}>${obj.price}</Text>
      </View>
      <Text style={styles.desc}>Description</Text>
      <Text style={styles.desc2}>{obj.description}</Text>
      <View style={styles.btngroup}>
        <Image source={require('../img/heart.png')}/>
        <TouchableOpacity style={styles.btn}
              onPress={()=>{navigation.navigate('screen02')}}
        >
          <Text style={styles.txtbtn}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 10,
  },
  imgitem: {
    height: 300,
    width: '100%',
    backgroundColor: '#fdeded',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  img: {
    height: 220,
    width: '100%',
  },
  txtName: {
    fontSize: 35,
    fontFamily: 'Voltaire',
    fontWeight: 400,
    padding: 10,
  },
  price:{
    flexDirection:'row',
    justifyContent:'flex-start',
    marginLeft:10
  },
  txtsale:{
    color:'#696969',
    marginRight:20,
    fontSize:25
  },
  txtPrice:{
    marginLeft:10,
    fontSize:25
  },
  desc:{
    fontSize:20,
    margin:10
  },
  desc2:{
    fontSize:16,
    margin:4,
    paddingLeft:4
  },
  btngroup:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10
  },
  btn:{
    width:'80%',
    height:54,
    backgroundColor:'#e94141',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  txtbtn:{
    fontSize:18,
    color:'#ffff',
    fontWeight:'bold'
  }
  
});
