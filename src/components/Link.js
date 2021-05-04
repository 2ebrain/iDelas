import React from 'react'

import { Text, StyleSheet} from 'react-native'


export default ({onPress, tittle, size, marginBottom, fontFamily}) => (
    <Text style={[styles.link,{fontSize:size},
    {marginBottom: marginBottom},
    {fontFamily: fontFamily}
    ]} onPress={onPress}>
        {tittle}</Text>
    )
    
const styles = StyleSheet.create({
    link:{
        textDecorationStyle: "solid",
        color:'#fff',
        marginTop:13,
    },
});
