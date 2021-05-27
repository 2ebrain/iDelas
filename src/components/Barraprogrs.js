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
      <View style={{justifyContent:'center', alignItems:'center', marginTop:-5}}>
        <Text style={[styles.progressText,
                    {color:props.colortitle},
                    {backgroundColor:props.backgroundColorTitle}]}>{props.title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  progressContainer:{
    width: '100%',
    height: 'auto',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  barraBorder:{
    width:189,
    height:15,
    padding: 0,
    borderWidth:2,
    borderRadius:7,
    marginBottom:5,
    
  },
  barraProgress:{
    height:'100%',
    backgroundColor:'#7B1DCC',
  },
  progressText:{
    fontFamily:'gotham-medium',
    fontSize:8,
    paddingHorizontal:10,
    textAlign:'right',
    borderRadius:10,
  }
})