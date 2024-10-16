import { Text, SafeAreaView, StyleSheet, FlatList ,View,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Screen01() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style ={styles.header}>
        <Text style ={styles.txtheader}>A premium online store for sporter and their stylish choice</Text>
      </View>
      <View style ={styles.viewimg}>
          <Image style ={styles.imgb} source = {require('../img/bifour_-removebg-preview.png')}/>
          
      </View>
      <View style ={styles.center}>
        <Text style ={styles.txtshop}>POWER BIKE </Text>
        <Text style ={styles.txtshop}>SHOP</Text>
      </View>
      <TouchableOpacity style={styles.btn}
                  onPress ={()=> navigation.navigate('screen02')}
      
      >
        <Text style={styles.txtbtn}>Get Started</Text>
      </TouchableOpacity>
    </View>

  )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 8,
  },
  header:{
    marginTop:28,
    alignSelf:'center',
    justifyContent:'center',
    width:'85%',
  },
  txtheader:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    fontFamily:"VT323"
  },
  viewimg:{
    marginTop:10,
    backgroundColor:'#f7e5e3',
    width:'100%',
    height:250,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  imgb:{
    width:200,
    height:185
  },
  center:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:16,
  },
  txtshop:{
    fontSize:18,
    fontWeight:'700',
    fontFamily:'Ubuntu',
    lineHeight:25
  },
  btn:{
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    width:270,
    height:42,
    backgroundColor:'#e94141',
    borderRadius:20
  },
  txtbtn:{
    color:'#ffff',
    fontSize:18,
    fontWeight:700,
  }
 
});
