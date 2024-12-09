import { Text, SafeAreaView, StyleSheet,View,Image,TouchableOpacity,TextInput,FlatList } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer,useNavigation} from '@react-navigation/native'
import react,{useState} from 'react'


// cần import
import {useSelector,useDispatch} from 'react-redux'
// import các action
import {setCategory,setFilter} from './store'
// import { updateData } from './pathToYourSlice';  // Import action để cập nhật dữ liệu trong store
export default function Screen02() {
  const navigation = useNavigation()
  const [seeall,setSeeall] = useState(false);
  const dispatch = useDispatch()
  // lấy data từ store
  // const products = useSelector((state)=>state.products.products)
  const {products,categories,filter,selectedCategory} = useSelector((state)=>state.products)
  
  // const filterProducts = () => {
  //   return products.filter(product => product.category===selectedCategory && product.type===filter);
  // };
  const filteredProducts = products.filter((product) => product.category === selectedCategory && product.type === filter)

  const displayedProducts = seeall ? products : products.slice(0, 4);
  return (
    <View style={styles.container}>
      <View style={{width:'100%',padding:8,flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',gap:4}}>
           <Image style={{height:20,width:20}} source={require('./Data/eye.png')}/>
           <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}>Electronics{filter}{selectedCategory}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',gap:4}}>
           <Image style={{height:20,width:20}} source={require('./Data/codicon_account.png')}/>
           <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}>Cart</Text>
        </TouchableOpacity>
      </View>
      <View style={{width:'100%',padding:8,flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
        <View style={{flexDirection:'row',alignItems:'center',gap:4,width:'85%',borderWidth:1,padding:8,borderRadius:8}}>
           <Image style={{height:20,width:20}} source={require('./Data/search.png')}/>
           <TextInput style={{width:'89%'}} placeholder='Search' placeholderTextColor='gray' />
        </View>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',gap:4}}>
           <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}>Filter</Text>
        </TouchableOpacity>
      </View>
      <View style={{width:'100%',padding:8,flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
        <Text style={{fontSize:12,fontWeight:'bold',color:'black'}}>Categories</Text>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',gap:4}}>
           <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}>see all</Text>
        </TouchableOpacity>
      </View>
      <View style={{width:'100%',alignItems:'center',justifyContent:'center',marginTop:15}}>
        <FlatList
          style={{width:'100%',height:40}}
          data={categories}
          renderItem={({item})=>{
            return (
              <TouchableOpacity 
                onPress={()=>{
                  dispatch(setCategory(item))
                }}
                style={{marginHorizontal:20,borderRadius:8,borderWidth:1,padding:8,justifyContent:'center'}}>
                <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}>{item}</Text>
               </TouchableOpacity>
            )
          }}
          horizontal={true}
        />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%',padding:8}}>
        <TouchableOpacity 
               onPress={()=>{
                  dispatch(setFilter('Best Sales'))
                }}
              style={{borderRadius:8,borderWidth:1,padding:4,justifyContent:'center'}}>
                <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}>Best Sales</Text>
        </TouchableOpacity>
        <TouchableOpacity 
              onPress={()=>{
                  dispatch(setFilter('Best Matched'))
                }}
              style={{borderRadius:8,borderWidth:1,padding:4,justifyContent:'center'}}>
                <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}>Best Matched</Text>
        </TouchableOpacity>
        <TouchableOpacity 
              onPress={()=>{
                  dispatch(setFilter('Popular'))
                }}
              style={{borderRadius:8,borderWidth:1,padding:4,justifyContent:'center'}}>
                <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}>Popular</Text>
        </TouchableOpacity>
      </View>
       <View style={{width:'100%',alignItems:'center',justifyContent:'center',marginTop:20}}>
        <FlatList
          style={{width:'100%',height:250}}
          data={displayedProducts}
          renderItem={({item})=>{
            return (
              <TouchableOpacity style={{padding:8,justifyContent:'center'}}>
                <View style={{flexDirection:'row',width:'100%',padding:8}}>
                  <Image source={item.img} style={{width:40,height:40}}/>
                  <View>
                    <Text>{item.category}</Text>
                    <Text>{item.type}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <TouchableOpacity 
          onPress={()=>{
                  setSeeall(!seeall)
                }}
          style={{borderRadius:8,borderWidth:1,padding:4,justifyContent:'center'}}>
          <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}>see all</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 8,
  },
});
