import { StyleSheet, Text, View,TouchableOpacity,Image ,TextInput} from 'react-native'
import React ,{useState,useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const API_Screen_03 = () => {
    const Base_Url = "https://64583ae61a4c152cf9937c0c.mockapi.io/api/v1/todos";
    const navigation = useNavigation();
    const route = useRoute();
    const [toDo,setToDo] = useState({
        id: '',
        job: '',
        title: 'ddass',
        name: 'sss',
        createdAt: new Date().toISOString(),
    });
    useEffect(() => {
        if (route.params?.toDoEdit) {
          const { id, job, title, name, createdAt } = route.params.toDoEdit;
          setToDo({ id, job, title, name, createdAt });
        }
      }, [route.params]);
    const handleTodo = (toDoJob) => {
      if(toDoJob.id){
        //chỉnh sửa 
        fetch(Base_Url + '/' + toDoJob.id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(toDoJob),
        }).then((response) => {
          if (response.status === 200) {
            alert('Updated successfully');
            navigation.navigate('Screen02',{refresh:true});
          } else {
            alert('Failed to update todo');
          }
        });
      }else {
        //thêm mới
        toDoJob.id = Math.floor(Math.random() * 10000);
        alert('toDoJob.id'+toDoJob.id);
        fetch(Base_Url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(toDo),
        }).then((response) => {
          if (response.status === 201) {
            alert('Added successfully');
            navigation.navigate('Screen02',{refresh:true});
           
          } else {
            alert('Failed to add todo');
          }
        });
      }
    }
    const handleDelete = (toDoId) => {
      alert('Deleted successfully'+toDoId.id);
    }
    
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.avatar}>
              <Image source={require('../assets/img/avatar.png')} />
              <View style={styles.avatar2}>
                <Text style={styles.txtName}>Hi Twinkle</Text>
                <Text style={styles.txtMessage}>Have agrate day a head</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../assets/img/left.png')} />
            </TouchableOpacity>
        </View>
        <View style={styles.body}>
            <View>
                <Text style={styles.addjob}>
                    ADD YOUR JOB
                </Text>
            </View>
            
            <View style={styles.viewaddjob}>
                <Image source={require('../assets/img/jobadd.png')} />
                <TextInput style={styles.txtInput} 
                            value={toDo.job}
                            onChangeText={(text) => setToDo({...toDo, 
                                job: text,}
                            )}
                            placeholder="Enter your job..."/>
            </View>
            <View style={{marginTop:50}}>
                <TouchableOpacity style={styles.btnAdd}
                                    // onPress={() => handleTodo()}
                                    onPress={() => {handleTodo(toDo)}}
                
                >
                    <Text style={styles.txtAdd}>Finish</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:50}}>
                <Image source={require('../assets/img/Image95.png')} />
            </View>
        </View>
    </View>
  )
}

export default API_Screen_03

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
      addjob: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 50,
        alignSelf: 'center',
      },
      body: {
        width: '100%',
        alignItems: 'center',
        marginTop: 50,
      },
      viewaddjob: {
        flexDirection:'row',
        marginVertical: 20,
        height: 70,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#9195a0',
        paddingHorizontal: 10,
        paddingLeft: 10,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      txtInput: {
        width: '90%',
        height: 40,
        fontSize: 16,
      },
      btnAdd: {
        flexDirection:'row',
        backgroundColor: '#27c3d9',
        height: 44,
        width: 200,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
      },
      txtAdd: {
        color: '#fff',
        fontSize: 18,
      },
})