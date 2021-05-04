import React from 'react'
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import buttonSing from '../assets/icons/icon-sino.png'

import ArrowLif from '../assets/icons/icon-back.png'
import Interrogacao from '../assets/icons/icon-interrogacao.png'


export default () =>{
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={ArrowLif} style={{ width: 51, height: 16 }} />
      </TouchableOpacity>

      <View style={styles.headerContent}>
        <TouchableOpacity>
          <Image source={Interrogacao} style={{ width: 12, height: 20 }} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={buttonSing} style={{ width: 17, height: 19 }} />
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
    width:80,
    alignItems:'center',
    justifyContent:'space-evenly',
  },
})