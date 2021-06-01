import React from 'react'


import {SafeAreaView, 
        View, 
        ScrollView, 
        Text,
        TextInput,
        TouchableOpacity} from 'react-native'
import Styles from './style'

import Avatar from '../../assets/icon-avatar-home.png'

import HeaderSecundary from '../../components/HeaderMenuSecundary'
import Header from '../../components/Header'




export default () =>{

  

  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          <HeaderSecundary/>
          <Header source={Avatar} nickName='Renata Mendes'/>
          <View style={Styles.content}>
            <View style={Styles.titulo}>
              <Text style={Styles.textTitulo}>Cadastro de Terceiros</Text>
            </View>
            
            <View style={Styles.buttonsSection}>
              <TouchableOpacity style={[Styles.buttonForm, Styles.bgOrange]}>
                <Text style={Styles.textbuttonForm}>Pessoa Física</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[Styles.buttonForm, Styles.bgPurple]}>
                <Text style={Styles.textbuttonForm}>Pessoa Jurídica</Text>
              </TouchableOpacity>
            </View>


            <View style={Styles.forms}>
              <View style={Styles.rowForm}>
                <Text style={Styles.labelForm}>Nome</Text>
                <TextInput  style={Styles.inputForm}/>
              </View>
              <View style={Styles.rowForm}>
                <Text style={Styles.labelForm}>E-mail</Text>
                <TextInput  style={Styles.inputForm}/>
              </View>
              <View style={Styles.rowForm}>
                <Text style={Styles.labelForm}>Telefone/Celular</Text>
                <TextInput  style={Styles.inputForm}/>
              </View>
              <View style={Styles.rowForm}>
                <Text style={Styles.labelForm}>CPF</Text>
                <TextInput  style={Styles.inputForm}/>
              </View>

              <View style={Styles.titulo}>
              <Text style={Styles.textTitulo}>Informações Extras</Text>
            </View>


            </View>

            

           

            

           
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}