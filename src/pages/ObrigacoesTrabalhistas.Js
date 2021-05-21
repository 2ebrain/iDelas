import React from 'react'
import {StyleSheet, Text, 
          View, TouchableOpacity,SafeAreaView, 
          ScrollView} from 'react-native'


import DollarCoin from '../assets/dollar-coin.svg'
import AvatarHome from '../assets/icon-avatar-home.png'
import CirclePlus from '../assets/plus-circle-orange.svg'
import CifraoIcon from '../assets/cifrao-icon.svg'

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
      quantidade:1,
      saldo:'R$ 5.500,00'
    },
    {
      id:3,
      titulo:'Limpeza',
      quantidade:5,
      saldo:'R$ 7.500,00'
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
            <View key={obrigacao.id} style={styles.cardObrigacoes}>
              <View style={styles.headerCard}>
                <View>
                  <Text style={styles.tituloObrigacao}>{obrigacao.titulo}</Text>
                  <Text style={styles.quantidadeText}>{obrigacao.quantidade} funcionario</Text>
                </View>
               
              <TouchableOpacity>
                <CirclePlus width={16} height={16}/>
              </TouchableOpacity>
              </View>
        
              <TouchableOpacity style={styles.buttonSaldo}>

                <CifraoIcon width={7} height={13}/>
                <Text style={styles.textButtonSaldo}>{obrigacao.saldo}</Text>
              </TouchableOpacity>
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


  cardObrigacoes:{
    backgroundColor:'#fff',
    width: '90%',
    alignItems:'center',
    borderRadius:10,
    marginBottom:25,
    elevation:3,
  },
  headerCard:{
    flexDirection:'row',
    width: '100%',
    justifyContent:'space-between',
    alignItems:'flex-start',
    marginTop:14,
    marginBottom:15,
    paddingHorizontal:15,
  },
  tituloObrigacao:{
      fontSize:12,
      fontFamily:'gotham-medium',
      color: '#691CC7',
  },
  quantidadeText:{
    fontFamily:'gotham-medium',
    fontSize:10,
    color: '#7C7C7C',
  },

  buttonSaldo:{
    width: '90%',
    height:33,
    paddingLeft:12,
    marginBottom:17,
    flexDirection:'row',
    borderWidth:2,
    borderColor:'#F8DDA8',
    borderRadius:10,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  textButtonSaldo:{
    fontSize:12,
    fontFamily:'gotham-medium',
    color:'#777777',
    marginLeft:17,
  },
})