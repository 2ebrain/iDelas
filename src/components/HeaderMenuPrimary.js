import React from 'react'
import { View, Text, StyleSheet, 
          TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import ArrowBottom from '../assets/icons/icon-arrow-bottom-white.png'
import Toggle from '../assets/button-toggle.svg'
import SignButton from '../assets/icon-sign.svg'

export default () => {
  const navigation = useNavigation()

  // componente de header primario, com botão de menu toggle.
  return(
    <View style={styles.header}>
      <TouchableOpacity
        // onPress={() => {
        //   navigation.goBack()
        // }}
      >
        <Toggle width={21} height={13}/>
      </TouchableOpacity>

      <View style={styles.headerContent}>
        <TouchableOpacity style={styles.buttonDrop}>
          <Text style={styles.textMenuDropDown}>Aberto</Text>
          <Image source={ArrowBottom} style={styles.iconArrow}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <SignButton width={17} height={19}/>
        </TouchableOpacity>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  header:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:25,

  },
  headerContent:{
    flexDirection:'row',
    width:160,
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  buttonDrop:{
    backgroundColor:'#691CC7',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    width:98,
    height:21,
    borderRadius:15,
  },
  textMenuDropDown:{
    fontSize:10,
    fontFamily:'gotham-book',
    color:'#fff',
    textTransform:'uppercase',
  },
  iconArrow:{
    width:10,
    height:7
  },
})