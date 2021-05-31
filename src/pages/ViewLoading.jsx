import React from 'react'

import {SafeAreaView, Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import {FontAwesome5} from '@expo/vector-icons'

import Mascot from '../assets/Mascot_236x350.png.png'

export default function (){
  const navigation = useNavigation();

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}
                          style={styles.buttonBack}>
          <FontAwesome5 name='chevron-left'size={40} color='#fff'/>
          <Text style={styles.textBack}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Image source={Mascot}
                style={styles.imgPet}/>
        <Text style={styles.textInformation}>iDelas em construção...</Text>
        <View style={styles.boxConfig}>
          <FontAwesome5 name='cog' color='#fff' size={55}/>
          <FontAwesome5 name='cog' color='#fff' size={47}/>
          <FontAwesome5 name='cog' color='#fff' size={53}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#751DCB',
  },
  header:{
    width:'100%',
    marginTop:15,
  },
  content:{
    position:'relative',
    bottom:300,
    alignItems:'center',
  },
  boxConfig:{
    flexDirection:'row',
  },
  buttonBack:{
    width:85,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:15,
  },
  textBack:{
    color:'#fff',
  },
  imgPet:{
    width:110,
    height:170,
  },
  textInformation:{
    color:'#fff',
    fontSize:25,
  },
})