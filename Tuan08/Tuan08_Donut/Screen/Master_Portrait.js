import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    SafeAreaView,
    TextInput,
    Image,
    Pressable
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DonutItem from '../component/DonutItem';
const Master_Portrait = () => {
    const BARE_URL = "https://64583ae61a4c152cf9937c0c.mockapi.io/api/v1/Donuts"
    const navigation = useNavigation();
    const [donuts, setDonuts] = useState([]);
    const [selectedDonut, setSelectedDonut] = useState('Donut');

    const getData = () => {
        fetch(BARE_URL)
            .then(response => response.json())
            .then(data => setDonuts(data))
    }
    const filteredProducts = (condition) => {
        // return donuts.filter(item => item.name.toLowerCase().includes(condition.toLowerCase()))
        // setDonuts(donuts.filter(item => item.name.toLowerCase().includes(condition.toLowerCase())))
        fetch(BARE_URL)
            .then(response => response.json())
            .then(data => setDonuts(data.filter(item => item.name.toLowerCase().includes(condition.toLowerCase()))))
    }
    useEffect(() => {
        getData();
    }, [])
    
    return (
        <View style={styles.container}>
            <Text style={styles.txtW}>Welcome, Jala</Text>
            <Text style={styles.txtC}>Choice your Best food</Text>
            <View style={styles.searchview}>
                <TextInput style={styles.searchinput} placeholder='Search food' />
                <Image style={styles.imgsearch} source={require('../assets/images/search.png')} />
            </View>
            <View style={styles.choiceview}>
                <Pressable
                    style={
                        [styles.choiceitem,
                        { backgroundColor: selectedDonut === 'Donut' ? '#f1af00' : '#fff' }]
                    }
                    onPress={() => {
                        setSelectedDonut('Donut');
                        getData();
                    }}
                >
                    <Text style={styles.txtchoice}>Donut</Text>
                </Pressable>
                <Pressable
                    style={[styles.choiceitem,
                    { backgroundColor: selectedDonut === 'Pink Donut' ? '#f1af00' : '#fff' }]
                    }
                    onPress={() => {
                        setSelectedDonut('Pink Donut');
                        filteredProducts('Pink Donut');
                    }}
                >
                    <Text style={styles.txtchoice}>Pink Donut</Text>
                </Pressable>
                <Pressable
                    style={[styles.choiceitem,
                    { backgroundColor: selectedDonut === 'Floating' ? '#f1af00' : '#fff' }]
                    }
                    onPress={() => {
                        setSelectedDonut('Floating')
                        filteredProducts('Floating');
                    }}
                >
                    <Text style={styles.txtchoice}>Floating</Text>
                </Pressable>
            </View>
            <View style={styles.foodview}>
                <FlatList
                    data={donuts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <DonutItem item={item} />
                    }
                />
            </View>
        </View>
    )
}

export default Master_Portrait

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 10
    },
    txtW: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#595959'
    },
    txtC: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    searchview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    searchinput: {
        height: 48,
        width: '80%',
        padding: 8,
        borderWidth: 1,
        borderColor: '#c3c3c3',
        backgroundColor: '#f9f9f9',
        color: '#d1d1d1'
    },
    imgsearch: {
    },
    choiceview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20
    },
    choiceitem: {
        borderColor: '#c3c3c3',
        borderWidth: 1,
        borderRadius: 5,
        height: 35,
        width: 101,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtchoice: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    foodview: {
        flex: 1,

    },
})
