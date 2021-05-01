import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

export default (props) => {
  return (
    <View style={styles.progressContainer}>

      <View style={[styles.barraBorder, 
                    {borderColor:props.borderColor}]}>

        <View style={[styles.barraProgress, 
                     { width: props.porcemtagem},
                     {backgroundColor:props.backgroundColor}]}></View>
      </View>
      <Text style={[styles.progressText,
                    {color:props.colortitle},
                    {backgroundColor:props.backgroundColorTitle}]}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  progressContainer:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  barraBorder:{
    width:150,
    height:15,
    borderWidth:2,
    borderRadius:7,
    marginBottom:5,
  },
  barraProgress:{
    height:'100%',
    backgroundColor:'#7B1DCC',
  },
  progressText:{
    fontSize:13,
    width:50,
    textAlign:'center',
    borderRadius:10,
  }
})