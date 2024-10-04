import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput, FlatList } from 'react-native'
import React from 'react'
import { useNavigation,useRoute } from '@react-navigation/native';
import { useState,useEffect } from 'react';


const API_Screen_02 = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const TodoItem =({obj}) =>{
    return(
      <View style={styles.item}>
          <View style={styles.item2}>
            <Image source={require("../assets/img/done.png")} />
            <Text style={styles.txttask}>{obj.job}</Text>
          </View>
          <TouchableOpacity>
               <Image source={require("../assets/img/edit.png")} />
           </TouchableOpacity>
      </View>
    )
  }

  const Base_Url = "https://64583ae61a4c152cf9937c0c.mockapi.io/api/v1/todos";
  const [toDo, setToDo] = useState({
    id: '',
    job: '',
    title: '',
    name: '',
    createdAt: '',
  })
  
  const [todos, setTodos] = useState([]);

  const handleGetToDos = () =>{
    fetch(Base_Url).then(function(response){
      return response.json();
    }).then(function(response){
      setTodos(response);
    }).catch(function(error){
      console.log(error);
    });
  }

  useEffect(() => {
    handleGetToDos();
  },[])

  
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}
            >
              <Image source={require('../assets/img/left.png')} />
            </TouchableOpacity>
            <View style={styles.avatar}>
              <Image source={require('../assets/img/avatar.png')} />
              <View style={styles.avatar2}>
                <Text style={styles.txtName}>Hi Twinkle</Text>
                <Text style={styles.txtMessage}>Have agrate day a head</Text>
              </View>
            </View>
        </View>
        <View style={styles.searchview}>
            <Image source={require("../assets/img/Search.png")} />
            <TextInput placeholder="Search..." style={styles.input} />
        </View>
        <FlatList
            style={styles.todolist}
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =><TodoItem obj={item}/>}
        />
        <View style={styles.viewadd}>
          <TouchableOpacity style={styles.btnAdd}>
              <Image source={require("../assets/img/plus.png")} />
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default API_Screen_02

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginTop: 20,
      },
      avatar: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      avatar2: {
        marginHorizontal: 10,
      },
      txtName: {
        fontSize: 20,
       
        fontWeight: 'bold',
      },
      txtMessage: {
        fontSize: 14,
      },
      searchview: {
        width: '85%',
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
        marginTop: 50,
      },
      input: {
        width: '90%',
        height: 38,
        marginLeft: 10,
      },
      todolist: {
        marginTop:62,
        width: '100%',
      },
      item:{
        width: '85%',
        height: 50,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingLeft: 10,
        paddingRight: 25,
        backgroundColor:'#d6dadd',
        borderRadius: 20,
        alignSelf: 'center',
        marginVertical: 10,
      },
      item2:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
      },
      txttask:{
        fontSize: 16,
        width:200,
        flexWrap: 'wrap',
        fontWeight:'bold',
        marginHorizontal: 10,
      },
      viewadd:{
        height: 150,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      btnAdd:{
        
      }

})