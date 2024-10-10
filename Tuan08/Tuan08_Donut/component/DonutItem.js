import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



const imageMap = {
    'tasty_donut1.png': require('../assets/images/tasty_donut1.png'),
    'green_donut1.png': require('../assets/images/green_donut1.png'),
    'donut_yellow1.png': require('../assets/images/donut_yellow1.png'),
    'donut_red2.png': require('../assets/images/donut_red2.png'),

};

const DonutItem = ({ item }) => {
    const { id, name, price, description, img } = item;
    const navigation = useNavigation();
    return (


        <Pressable style={styles.viewcontaineritem}
            onPress={() => {
                // alert(item.name)
                navigation.navigate('secondScreen',{id,name,price,description,img})
            }}
        >
            <View style={styles.viewitem}>
                <Image source={imageMap[item.img]} style={{ width: 100, height: 100, borderRadius: 10 }} />
                <View style={styles.viewitemright}>
                    <Text style={styles.txtname}>{item.name}</Text>
                    <Text style={styles.txtdes}>{item.description}</Text>
                    <View style={styles.priceitem}>
                        <Text style={styles.txtprice}>${item.price}</Text>
                        <Image source={require('../assets/images/plus_button.png')} />
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default DonutItem

const styles = StyleSheet.create({
    viewcontaineritem: {
        height: 200,
        width: '99%',
        backgroundColor: '#f3dedd',
        marginBottom: 10,
        padding: 10,
        justifyContent: 'center',
        borderRadius: 10,
    },
    viewitem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    viewitemright: {
        width: 205,
        marginLeft: 20,
    },
    txtname: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    txtdes: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6f6363',
        marginBottom: 5,
    },
    priceitem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    txtprice: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})