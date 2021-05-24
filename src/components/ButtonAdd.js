import React from 'react'

import { StyleSheet, TouchableOpacity,
         Text} from 'react-native'



export default (props) =>{
  return(
    <>
      <TouchableOpacity style={styles.button}>
        {props.children}
        <Text style={styles.textButton}>{props.titleButton}</Text>
      </TouchableOpacity>
    </>
  )
}


const styles = StyleSheet.create({
 button:{
  width: 152,
  height: 43,
  paddingLeft:14,
  justifyContent:'flex-start',
  alignItems:'center',
  flexDirection:'row',
  backgroundColor:'#691CC7',
  borderRadius:10,
 },
 textButton:{
   width:72,
   marginLeft:9,
   color:'#fff',
   fontFamily:'gotham-bold',
   fontSize:10,
 },
})