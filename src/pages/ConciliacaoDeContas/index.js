import React from 'react'
import { useNavigation } from '@react-navigation/core'

import AvatarHome from '../../assets/icon-avatar-home.png'

import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native'

import Header from '../../components/Header'

export default function (){
  const navigation = useNavigation();
  return(
    <SafeAreaView>
      <Header nickName='Renata Mendes' source={AvatarHome}/>
    </SafeAreaView>
  )
}

