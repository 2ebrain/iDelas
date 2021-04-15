import { TextInputMask } from'react-native-masked-text'
import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'


export default () => {
  const [input, setInput] = useState('');
  
  return(
    <View style={styles.container}>
      <View style={styles.inputArea}>
           
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  inputArea:{
    flexDirection:'row',
    width:'100%',
    height:43,
    backgroundColor:'#751dcb',
    borderColor:'#fff',
    borderWidth:2,
    borderRadius:20,
    alignItems:'center',
  },
  input:{
    width:'80%',
    height:43,
    color:'#fff',
    padding:8,
  },
  icon:{
    width:'20%',
    height:43,
    justifyContent:'center',
    alignItems:'flex-start',
  },
})
