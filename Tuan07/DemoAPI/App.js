import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	SafeAreaView,
} from 'react-native';

/*
job: 'Developer',
        title: 'New Job',
        name: 'John Doe',
        createdAt: new Date().toISOString(),*/

export default function App() {
  const API_URL ="https://64583ae61a4c152cf9937c0c.mockapi.io/api/v1/todos";
  const [toDo, setToDo] = useState({
    id: '',
    job: '',
    title: '',
    name: '',
    createdAt: '',
  })
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetToDos = () =>{
    fetch(API_URL).then(function(response){
      return response.json();
    }).then(function(response){
      setTodos(response);
    }).catch(function(error){
      console.log(error);
    });
  }
  const handleAddToDo = (toDo) =>{
    fetch(API_URL,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toDo),
    }).then((respone) =>{
      if(respone.status === 201){
        // handleGetToDos();
        setTodos([...todos, toDo]);
        alert('Added successfully');
      }else{
        alert('Failed to add todo');
      }
    });
  }
  const handleDeleteToDo = (id) =>{
    fetch(`${API_URL}/${id}`,{
      method: 'DELETE',
    }).then((respone) =>{
      if(respone.status === 200){
        setTodos(todos.filter((todo) => todo.id !== id));
        alert('Deleted successfully');
      }else{
        alert('Failed to delete todo');
      }
    });
  }
  const handleEditTodo = (todo) => {
    setToDo({
      id: todo.id,
      job: todo.job,
      title: todo.title,
      name: todo.name,
      createdAt: todo.createdAt,
    });
    fetch(API_URL + '/' + todo.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
      }).then((resp)=>{
        if(resp.status === 200){
          alert('Updated successfully');
          handleGetToDos();
        }else{
          alert('Failed to update');
        }
      });
    }
  const Items = ({obj})=>{
    return(
      <View style={styles.item}>
        <View style={styles.itemName}>
          <Text style={styles.itemID}>{obj.id}</Text>
          <Text style={styles.itemTT}>{obj.title}</Text>
        </View>
        <Text style={styles.itemDD}>{obj.job}</Text>
      </View>
    )
  }
  useEffect(()=>{
    handleGetToDos();
  }, []);
  return (
    <View style={styles.container}>
      <View>
          <TouchableOpacity style={styles.btn}
                            onPress={() => handleAddToDo({
                              id: '17',
                              job: 'Developer',
                              title: 'New Job',
                              name: 'John Doe',
                              createdAt: new Date().toISOString(),
                            })}
          >
            <Text style={styles.textBtn}>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}
                            onPress={() => handleEditTodo({
                                id: "10",
                                job: 'Developer',
                                title: 'New Job 222',
                                name: 'John Doe',
                                createdAt: new Date().toISOString(),
                            })}
                        >
            <Text style={styles.textBtn}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}
                            onPress={() => handleDeleteToDo("17")}
          >
            <Text style={styles.textBtn}>DELETE</Text>
          </TouchableOpacity>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList
        style={styles.todosView}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Items obj={item}/>}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:20,
  },
  btn:{
    height:32,
    width:200,
    backgroundColor:'#0180f2',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    margin:8
    
  },
  textBtn:{
    fontSize:14,
    fontWeight:'bold',
    color:'#ffff'
  },
  todosView:{
    marginTop:20,
    width:'100%',
    borderWidth:1,
    
  },
  item:{
    width:'95%',
    backgroundColor:'#7da',
    padding:10,
    marginVertical:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf:'center',
    borderwidth:1,
   
  },
  itemID:{
    fontSize:16,
    fontWeight:'bold'
  },
  itemTT:{
    fontSize:14,
    fontWeight:'bold'
  },
  itemDD:{
    fontSize:16,
    flexWrap:'wrap',
  }
});
