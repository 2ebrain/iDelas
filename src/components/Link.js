import React from 'react'

import { Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    link:{
        textDecorationStyle: "solid",
        color:'#fff',
        marginTop:13,
        
    },
});

export default ({onPress, tittle, size,marginBottom}) => 
(<Text style={[styles.link, 
                 {fontSize:size},
                 {marginBottom: marginBottom}
             ]} onPress={onPress} 
>
    {tittle}</Text>);
    
