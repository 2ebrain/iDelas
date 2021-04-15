import React, {useState} from 'react'

import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default () => {
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);
  return(
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor='#fff'
          value={input}
          onChangeText={ (texto) => setInput(texto) }
          secureTextEntry={hidePass}
          />
        <TouchableOpacity style={styles.icon}
                          onPress={ 
                            () => setHidePass(!hidePass) 
                          }>
          { hidePass ?
           <FontAwesome5 name='eye'
                        color='#fff'
                        size={25} />
                        :
           <FontAwesome5 name='eye-slash'
                          color='#fff'
                          size={25} />
        }
        </TouchableOpacity>    
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
