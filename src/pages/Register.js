<<<<<<< Updated upstream
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
=======
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, ImageBackground, Image } from 'react-native';

import firebase from './database/firebase';
import {db} from './database/firebase.js';

import BackgroundSub from '../assets/circuitos_.png'
import Logo from  '../assets/Logo_iDelas.png'

import Input from '../components/Input'
import Botao from '../components/Button'
export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => {
     // var user = res.user;
     
      console.log('User registered successfully!')
      if (firebase.auth().currentUser) {
        userId = firebase.auth().currentUser.uid;
        if (userId) {
            firebase.database().ref('users/' + userId).set({
              name:this.state.displayName,
              email:this.state.email,
             // password:password,
             // uid:this.userId,
              status:true,
              online:true
            })
        }
      }
      this.setState({
        isLoading: false,
        displayName: '',
        email: '', 
        password: ''
      })
      this.props.navigation.navigate('Login')
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      
      if (errorCode === 'auth/weak-password') {
        alert('Senha muito fraca!.');
      }
      else if (errorCode === 'auth/invalid-email') {
        alert('Este email não é valido.'); 
      }
      /*else if (errorCode === 'auth/email-already-in-use'){
        alert('Este email já está em uso.');
      }*/
      /*else if (errorCode === 'auth-user-not-found') {
        alert('Email não cadastrado.');
      }*/
      console.log(error);
      })
   
    
>>>>>>> Stagit shed changes
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
<<<<<<< Updated upstream
=======
      )
    }    
    return (
      <View style={styles.backngroundPrimary}>  
       <ImageBackground source={BackgroundSub} style={styles.backgroundSub}>
       <Image source={Logo} style={styles.logo}/>
       
        <Input
          
          placeholder="Nome"
          colorBorder='#FFFFFF' 
          placeholderTextColor='#FFFF'
          backgroundColor='#751DCB'
          width={250}
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />      
        <Input
          placeholder="Email"
          colorBorder='#FFFFFF' 
          placeholderTextColor='#FFFF'
          backgroundColor='#751DCB'
          width={250}
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <Input
          
          placeholder="Senha"
          colorBorder='#FFFFFF' 
          placeholderTextColor='#FFFF'
          backgroundColor='#751DCB'
          width={250}
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Botao tittle ='Registrar'
          color="#31d57c"
          width={134}
          marginTop={24}
          marginBottom={12}
          title="Registrar"
          onPress={() => this.registerUser()}
        />

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Já tem conta? Clique aqui para entrar
        </Text>  
        </ImageBackground>                        
>>>>>>> Stashed changes
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