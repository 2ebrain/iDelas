import React from 'react'

import {View, SafeAreaView, Text, ScrollView} from 'react-native'

import Avatar from '../../assets/icon-avatar-home.png'
import HeaderSecundary from '../../components/HeaderMenuSecundary'
import Header from '../../components/Header'

export default function Saida(){
  return(
    <SafeAreaView>
      <ScrollView>
        <HeaderSecundary/>
        <Header nickName='Renata Mendes' source={Avatar}/>
      </ScrollView>

    </SafeAreaView>
  )
}