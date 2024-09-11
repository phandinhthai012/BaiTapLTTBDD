import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

const DemoUseState = () => {
    const [count,setCOunt] = useState(0);
    return (
     <View style = {styles.container}>
        <Button title = 'Click me' onPress = {()=>{
              setCOunt(count+1)
         }}/>
      <View style = {styles.textView} >
        <Text style = {styles.textCount}>{count}</Text>
      </View>
     </View>
    );
}

export default DemoUseState

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
      textView :{
        marginTop:12,
        alignItems: 'center'
      },textCount:{
        fontSize:16,
        fontWeight:'bold'
      }
});