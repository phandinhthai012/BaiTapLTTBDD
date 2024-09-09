import { StyleSheet, Dimensions } from "react-native";


const { width } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        backgroundColor:'#d0f3f5',
    },
    lock :{
        marginTop:50,
        marginBottom: 50,
    },
    TextHeads :{
        alignItems: 'center',
        margin:22
    },
    Text1:{
        fontSize:25,
        fontWeight: 'bold',
    },
    Text2:{
        fontSize:15,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
    },
    inputs:{
        flexDirection:'row',
        backgroundColor:'#c3c5c4',
        width:305,
        height:45,
        paddingLeft:10,
        justifyContent:'flex-start',
        margin:16
        
    },
    inputImg:{

    },
    input:{
        fontSize:18,
        paddingLeft:5  
    },
    buttons :{
        backgroundColor:'#e3c100',
        width:305,
        height:45,
        justifyContent:'center',
    },
    button:{
        alignItems:'center',
        
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
    }
})