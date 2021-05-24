import React from 'react'
import {SafeAreaView, View, ScrollView, Text} from 'react-native'

import Avatar from '../../assets/icon-avatar-home.png'

import Styles from './style'

import HeaderMenuSecundary from '../../components/HeaderMenuSecundary'
import Header from '../../components/Header'

export default function CobrancasPendentes(){
  return(
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <View>
          <HeaderMenuSecundary/>
          <Header nickName='Renata Mendes' source={Avatar}/>

          <View style={Styles.content}>
            <View style={Styles.titulo}>
              <Text style={Styles.textTitulo}>Cobrança</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}