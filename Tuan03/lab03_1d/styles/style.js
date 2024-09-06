import { StyleSheet , Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d8efdf',
      alignItems: 'center',
    //   justifyContent: 'center',
    },
    top: {
        margin:52
    },
    textTop:{
        fontSize:24,
        fontWeight:'bold'
    },
    inputs:{
        backgroundColor:'#cae1d1',
        width: width * 0.9,  // 90% chiều rộng
        margin:12,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingRight:12,
        paddingLeft:12,
    },
    input:{
        width: width * 0.3, 
        height: 50,
        fontSize: 18,
    },
    inputImg:{

    },
    buttons:{
        marginTop: 24,
    },
    button:{
        backgroundColor:'#c34e3c',
        width: width * 0.9,  // 90% chiều rộng
        padding: 15,
        borderRadius: 2,
        alignItems: 'center',
        marginTop:12
    },
      buttonText:{
        fontSize: 18,
        fontWeight:'bold',
        color: 'white'
    },
    title:{
        marginTop:32,
        alignItems: 'center',
    },
    textTitle:{
        padding:8,
        fontSize:14,
        fontStyle: 'normal',
    },
    colorT: {
        color:"#5D25FA"
    },
    logo:{
        marginTop:8
    }
  });


  export default styles;