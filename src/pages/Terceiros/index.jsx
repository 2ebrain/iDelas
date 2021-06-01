import React from 'react'


import {SafeAreaView, 
        View, 
        ScrollView, 
        Text,
        TextInput} from 'react-native'
import Styles from './style'

import Avatar from '../../assets/icon-avatar-home.png'
import CirclePlus from '../../assets/plus-circle.svg'
import IconSearch from '../../assets/search-icon.svg'

import HeaderSecundary from '../../components/HeaderMenuSecundary'
import Header from '../../components/Header'
import ButtonAdd from '../../components/ButtonAdd'



export default () =>{

  const list= [
    {
      id:1,
      nome:'Nome',
      email:'nome@gmail.com',
      phone:'Telefone/Celular',
      cpf:'CPF',
      local:'Cidade/Estado',
      logradouro:'Rua, Número, CEP',
      codeTerceiros:'COD de terceiros'
    },
    {
      id:2,
      nome:'Nome',
      email:'nome@gmail.com',
      phone:'Telefone/Celular',
      cpf:'CPF',
      local:'Cidade/Estado',
      logradouro:'Rua, Número, CEP',
      codeTerceiros:'COD de terceiros'
    },
    {
      id:3,
      nome:'Nome',
      email:'nome@gmail.com',
      phone:'Telefone/Celular',
      cpf:'CPF',
      local:'Cidade/Estado',
      logradouro:'Rua, Número, CEP',
      codeTerceiros:'COD de terceiros'
    },
    {
      id:4,
      nome:'Nome',
      email:'nome@gmail.com',
      phone:'Telefone/Celular',
      cpf:'CPF',
      local:'Cidade/Estado',
      logradouro:'Rua, Número, CEP',
      codeTerceiros:'COD de terceiros'
    },
  ]

  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          <HeaderSecundary/>
          <Header source={Avatar} nickName='Renata Mendes'/>
          <View style={Styles.content}>
            <View style={Styles.titulo}>
              <Text style={Styles.textTitulo}>Terceiros</Text>
            </View>

            <View style={Styles.sectionButtonAdd}>
              <ButtonAdd titleButton='Cadastrar Terceiros' widthText={120}>
                <CirclePlus width={16} height={16}/>
              </ButtonAdd>
            </View>

            <View style={Styles.sectionSearch}>
              <View style={Styles.search}>
                <IconSearch width={13} height={14}/>
                <TextInput placeholder='Pesquisar Tereiros' 
                          style={Styles.searchText}/>
              </View>
            </View>

            <View style={Styles.cardContainer}>
              {list.map(terceiro => (
                <View key={terceiro.id} style={Styles.cardTerceiro}>
                  <View style={Styles.avatar}></View>
                  <View style={Styles.containerInfo}>
                    <Text style={Styles.nickName}>{terceiro.nome}</Text>
                    <Text style={Styles.textInfo}>{terceiro.phone}</Text>
                    <Text style={Styles.textInfo}>{terceiro.cpf}</Text>
                    <Text style={Styles.textInfo}>{terceiro.local}</Text>
                    <Text style={Styles.textInfo}>{terceiro.logradouro}</Text>
                    <Text style={Styles.textInfo}>{terceiro.codeTerceiros}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}