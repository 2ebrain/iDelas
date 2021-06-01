import React from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import ButtonBack from '../assets/button-back.svg'
import QuestionIcon from '../assets/question-icon.svg'
import ButtonSign from '../assets/icon-sign.svg'
import ArrowLeft from '../assets/arrow-left-grey.svg'

export default () =>{
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.buttonBack}
      >
        {/* <ButtonBack width={51} height={16}/> */}
        <ArrowLeft width={8} height={16}/>
        <Text style={styles.textButtonBack}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.headerContent}>
        <TouchableOpacity>
          <QuestionIcon width={11} height={19}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <ButtonSign width={17} height={19}/>
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
    marginTop:37,

  },
  buttonBack:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width: 55,
    height: 16,
  },
  textButtonBack:{
    fontFamily:'gotham-medium',
    fontSize:12,
    color:'#777777',
  },
  headerContent:{
    flexDirection:'row',
    width:80,
    alignItems:'center',
    justifyContent:'space-evenly',
  },
})