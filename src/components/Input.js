import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

// Apenas um componente simples de input que recebe algumas próps do componente acima.
export default props => {
    return (
        <TextInput style={[styles.input, 
                            {borderColor : props.colorBorder}, 
                            {width: props.width},
                            {backgroundColor: props.backgroundColor}]} 
                  placeholder={props.placeholder}
                  placeholderTextColor='#fff'
                    secureTextEntry={props.secureTextEntry}
                    textContentType={props.textContentType}
                    keyboardType={props.keyboardType}
                    onChangeText={props.onChangeText}
                    autoFocus={props.autoFocus}
                  />);
}

const styles = StyleSheet.create({
    input:{
        color:'#fff',
        paddingVertical:15,
        paddingHorizontal:23,
        fontSize:12,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        height:43,
        borderWidth:2,
        marginBottom:14,
    
    },
});