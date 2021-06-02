import React from 'react'


import {SafeAreaView, 
        View, 
        ScrollView, 
        Text,
        TextInput,
        TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import Styles from './style'

import Avatar from '../../assets/icon-avatar-home.png'
import CircleImportant from '../../assets/important-value-icon.svg'

import HeaderSecundary from '../../components/HeaderMenuSecundary'
import Header from '../../components/Header'




export default () =>{

  

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <HeaderSecundary />
          <Header source={Avatar} nickName="Renata Mendes" />
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

            <KeyboardAvoidingView style={{width:'100%'}} 
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
              <View style={Styles.forms}>
                <View style={Styles.rowForm}>
                  <Text style={Styles.labelForm}>Nome</Text>
                  <TextInput style={Styles.inputForm} />
                </View>
                <View style={Styles.rowForm}>
                  <Text style={Styles.labelForm}>E-mail</Text>
                  <TextInput style={Styles.inputForm} />
                </View>
                <View style={Styles.rowForm}>
                  <Text style={Styles.labelForm}>Telefone/Celular</Text>
                  <TextInput style={Styles.inputForm} />
                </View>
                <View style={Styles.rowForm}>
                  <Text style={Styles.labelForm}>CPF</Text>
                  <TextInput style={Styles.inputForm} />
                </View>

                <View style={Styles.titulo}>
                  <Text style={Styles.textTitulo}>Informações Extras</Text>
                </View>

               <View style={{width:'90%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <View style={{width:'50%'}}>
                    <Text style={Styles.labelForm}>Cidade</Text>
                    <TextInput style={Styles.inputFormMedio} />
                </View>

                <View style={{width:'45%'}}>
                    <Text style={Styles.labelForm}>Estado</Text>
                    <TextInput style={Styles.inputFormPequeno} />
                </View>
               </View>

              <View style={Styles.rowForm}>
                  <Text style={Styles.labelForm}>Rua</Text>
                  <TextInput style={Styles.inputForm} />
              </View>

              <View style={{width:'90%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <View style={{width:'50%'}}>
                    <Text style={Styles.labelForm}>Numero</Text>
                    <TextInput style={Styles.inputFormMedio} />
                </View>

                <View style={{width:'45%'}}>
                    <View style={{flexDirection:'row'}}>
                      <Text style={Styles.labelForm}>CEP</Text>
                      <TouchableOpacity>
                        <CircleImportant width={15} height={15}/>
                      </TouchableOpacity>
                    </View>
                    <TextInput style={Styles.inputFormPequeno} />
                </View>
               </View>



              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}