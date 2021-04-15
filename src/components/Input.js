import React from 'react'
import {TextInput, StyleSheet} from 'react-native'


export default props => {
    return (
        <TextInput style={[styles.input, {borderColor : props.colorBorder}, {width: props.width}]} 
                  placeholder={props.placeholder}
                  placeholderTextColor='#fff'
                    secureTextEntry={props.secureTextEntry}
                    textContentType={props.textContentType}
                  />);
}


const styles = StyleSheet.create({
    input:{
        padding:15,
        fontSize:12,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        height:43,
        borderWidth:2,
        marginBottom:14,
    
    },
});