import {
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { NavigationContainer,useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';

const Stack = createNativeStackNavigator();

const data = [
  {
    id: 1,
    type: 'Roadbike',
    name: 'Pinarello',
    price: 1800,
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    saleOff: '15% OFF I 350$',
    urlImage: require('../img/bifour_-removebg-preview.png'),
  },
  {
    id: 2,
    type: 'Mountain',
    name: 'Pina Mountai',
    price: 1800,
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    saleOff: '15% OFF I 350$',
    urlImage: require('../img/bione-removebg-preview.png'),
  },
  {
    id: 3,
    type: 'Roadbike',
    name: 'Pina Bike',
    price: 1800,
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    saleOff: '15% OFF I 350$',
    urlImage: require('../img/bithree_removebg-preview.png'),
  },
  {
    id: 4,
    type: 'Roadbike',
    name: 'Pinarello',
    price: 1800,
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    saleOff: '15% OFF I 350$',
    urlImage: require('../img/bitwo-removebg-preview.png'),
  },
  {
    id: 5,
    type: 'Roadbike',
    name: 'Pinarello',
    price: 2700,
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    saleOff: '15% OFF I 350$',
    urlImage: require('../img/bithree_removebg-preview.png'),
  },
  {
    id: 6,
    type: 'Mountain',
    name: 'Pinarello',
    price: 2400,
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    saleOff: '15% OFF I 350$',
    urlImage: require('../img/bione-removebg-preview2.png'),
  },
];
const ProductItem = ({ obj }) => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.viewitem}
          onPress={()=>{navigation.navigate('screen03',{obj})}}
    >
      <Image
        style={styles.imgheart}
        source={require('../img/akar-icons_heart.png')}
      />
      <Image source={obj.urlImage} style={styles.imgitem} />
      <View>
        <Text style={styles.txtname}>{obj.name}</Text>
        <Text style={styles.txtprice}>${obj.price}</Text>
      </View>
    </Pressable>
  );
};

export default function Screen02() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('All');
  const filterData = (type) => {
    if (type === 'All') {
      return data;
    }
    return data.filter(item => item.type === type);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.texth}>The world’s Best Bike</Text>
      <View style={styles.viewchoice}>
        <TouchableOpacity
          style={styles.itemchoice}
          onPress={() => {
            setSelected('All');
          }}>
          <Text
            style={[
              styles.txtchoice,
              { color: selected == 'All' ? '#e54642' : '#b8b5b6' },
            ]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemchoice}
          onPress={() => {
            setSelected('Roadbike');
          }}>
          <Text
            style={[
              styles.txtchoice,
              { color: selected == 'Roadbike' ? '#e54642' : '#b8b5b6' },
            ]}>
            Roadbike
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemchoice}
          onPress={() => {
            setSelected('Mountain');
          }}>
          <Text
            style={[
              styles.txtchoice,
              { color: selected == 'Mountain' ? '#e54642' : '#b8b5b6' },
            ]}>
            Mountain
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listitem}>
        <FlatList
          style={styles.list}
          // data={data}
          data={filterData(selected)}
          renderItem={({ item }) => <ProductItem obj={item} />}
          // keyExtractor={(item) => item.image}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 8,
  },
  texth: {
    color: '#e94141',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewchoice: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemchoice: {
    borderRadius: 5,
    borderColor: '#e94141',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '29%',
    height: 30,
  },
  txtchoice: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 20,
    marginRight: 10,
  },
  viewitem: {
    marginTop: 10,
    backgroundColor: '#fbf7ec',
    width: '50%',
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  imgitem: {
    width: 115,
    height: 110,
  },
  listitem: {
    flex: 1,
    width: '100%',
  },
  txtprice: {
    textAlign: 'center',
    fontFamily: 'Voltaire',
    fontSize: 20,
  },
  txtname: {
    marginTop: 20,
    fontFamily: 'Voltaire',
    fontSize: 20,
  },
  imgheart: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 10,
    marginTop: 10,
  },
});
