import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, ImageBackground, Image } from 'react-native';
import firebase from './database/firebase.js';
import BackgroundSub from '../assets/circuitos_.png'
import Logo from  '../assets/Logo_iDelas.png'

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
    }

  render() {
    if(this.state.isLoading){
      return(
        
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.backngroundPrimary}>  
       <ImageBackground source={BackgroundSub} style={styles.backgroundSub}>
       <Image source={Logo} style={styles.logo}/>
       
        <TextInput
          style={styles.inputStyle}
          placeholder="Nome"
          placeholderTextColor='#FFFF'
          backgroundColor='#751DCB'
          width={250}
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />      
        <TextInput
          style={styles.inputStyle}
          
          placeholder="Email"
          placeholderTextColor='#FFFF'
          backgroundColor='#751DCB'
          width={250}
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Senha"
          placeholderTextColor='#FFFF'
          backgroundColor='#751DCB'
          width={250}
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    backngroundPrimary:{
      flex:1,
      backgroundColor:'#F3F0E8',
    },
    backgroundSub:{
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
    inputStyle: {
      width: '100%',
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#FFFFFF",
      borderBottomWidth: 1
    },
    loginText: {
      color: '#ffffff',
      marginTop: 25,
      textAlign: 'center'
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }
});