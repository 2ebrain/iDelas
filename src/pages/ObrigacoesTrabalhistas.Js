import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity,SafeAreaView, ScrollView} from 'react-native'


import DollarCoin from '../assets/dollar-coin.svg'


import AvatarHome from '../assets/icon-avatar-home.png'

import CirclePlus from '../assets/plus-circle-orange.svg'

import Header from '../components/Header'
import HeaderMenu from '../components/HeaderMenuSecundary'

export default function ObrigacoesTrabalhistas(){

  const list =[
    {
      id:1,
      titulo:'Caixa de Loja',
      quantidade:3,
      saldo:'R$ 4.200,00'
    },
    {
      id:2,
      titulo:'Gerente',
      quantidade:3,
      saldo:'R$ 5.500,00'
    },
    {
      id:3,
      titulo:'Limpeza',
      quantidade:3,
      saldo:'R$ 4.200,00'
    },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <HeaderMenu />
          <Header nickName="Renata Mendes" source={AvatarHome} />
          {/* Titulo da seção */}
          <View style={styles.content}>
            <View style={styles.titulo}>
              <Text style={styles.textTitulo}>Obrigações trabalhistas</Text>
            </View>
          </View>

          <View style={styles.containerSaldo}>
            <DollarCoin width={27} height={21}/>
            <Text style={styles.saldoText}>Saldo Total</Text>
          </View>

          {list.map(obrigacao => (
            <View key={obrigacao.id}>
              <View>
                <Text>{obrigacao.titulo}</Text>
                <Text>{obrigacao.quantidade} funcionario</Text>
               
              <CirclePlus width={16} height={16}/>
              </View>
            </View>
          ))}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
  },
  content: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  titulo: {
    width: "100%",
    paddingHorizontal: 25,
    marginBottom: 10,
  },
  textTitulo: {
    fontSize: 15,
    color: "#691CC7",
    fontFamily: "gotham-medium",
  },


  containerSaldo:{
    width: '90%',
    height:39,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:10,
    elevation:5,
    paddingLeft:12,
    marginBottom:20,
    
  },
  saldoText:{
    fontSize:12,
    color:'#777777',
    marginLeft:12,
    fontFamily:'gotham-medium',
  },
})