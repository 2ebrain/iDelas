import React from 'react'
import  {View, StyleSheet, 
               ImageBackground, Image,
               KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import BrackgroundSub from '../assets/circuitos_.png'
import Logo from  '../assets/Logo_iDelas.png'

import Input from '../components/Input'
import InputPassword from '../components/PasswordInput'
import Botao from '../components/Button'

export default function Register(){
  const navigation = useNavigation();

  function handleNavigateToConfirmerDetails(){
    navigation.navigate('Confirmation');
  }
    return(
      <View style={styles.container}>
        <View style={styles.backngroundPrimary}>
          <ImageBackground source={BrackgroundSub} style={styles.brackgroundSub}>
              <KeyboardAvoidingView style={styles.content}
                                    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <Image source={Logo} style={styles.logo}/>
                <View style={styles.inputBox}>
                    <Input placeholder='Seu nome' 
                          colorBorder='#fff' 
                          textContentType='emailAddress'
                          width={250}
                          autoFocus={true}
                    />
                    <Input placeholder='Digite um e-mail válido' 
                          colorBorder='#fff' 
                          width={250}
                    />
                    <InputPassword/>
                </View>
                <Botao tittle='Quero me cadastrar' 
                      color='#31d57c'
                      width={250}
                      marginTop={85}
                      onPress={handleNavigateToConfirmerDetails}
                />
              </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    backngroundPrimary:{
      flex:1,
      backgroundColor:'#F3F0E8',
    },
    brackgroundSub:{
        flex: 1,
        resizeMode: 'cover',
        backgroundColor:'#751dcb',
        justifyContent: 'center',
        alignItems:'center',
    },
    content:{
        alignItems:'center',
      justifyContent:'space-between',
    },
    logo:{
      width:147,
      height:42,
      marginBottom:36,

    },
    inputBox:{
      width:250,
      height:96,
    },
});