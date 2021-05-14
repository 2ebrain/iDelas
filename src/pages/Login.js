import React from 'react'
import  {SafeAreaView, View, 
                      StyleSheet, 
                      ImageBackground, 
                      Image, Text, TouchableOpacity, 
                      KeyboardAvoidingView} from 'react-native'
import { useNavigation } from '@react-navigation/core'
<<<<<<< Updated upstream
=======

import firebase from './database/firebase';
>>>>>>> Stashed changes


import BrackgroundSub from '../assets/circuitos_.png'
import Logo from  '../assets/Logo_iDelas.png'

import FaceIcon from '../assets/icons/icon-facebook.png'
import GoogleIcon from '../assets/icons/icon-google.png'  
import LinkedinIcon from '../assets/icons/icon-linkedin.png'

import Input from '../components/Input'
import InputPassword from '../components/PasswordInput'
import Link from '../components/Link'
import Botao from '../components/Button'

export default function Login(){
  

  const navigation = useNavigation()

<<<<<<< Updated upstream
  function handleNavigateToRegisterDetails(){
    navigation.navigate('Register')
  }
  function login(){
    navigation.navigate('Home')
=======
  userLogin = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((userCredential) => {
      var user = userCredential.user;
    })
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Email ou senha incorreta! tente novamente.');
    } else if (errorCode === 'auth/invalid-email') {
      alert('Email ou senha incorreta! tente novamente.'); 
    }
    if (errorCode === 'auth/user-not-found'){
      alert('Usuario nao encontrado. Tente novamente');
    }
    /*else if (errorCode === 'auth-user-not-found') {
      alert('Email não cadastrado.');
    }*/
    console.log(error);
    })
   
    firebase
    .auth()
    .signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((res) => {
      console.log(res)
      console.log('User logged-in successfully!')
      this.setState({
        isLoading: false,
        email: '', 
        password: ''
      })
      this.props.navigation.navigate('Home')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
    
>>>>>>> Stashed changes
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.backngroundPrimary}>
        <ImageBackground source={BrackgroundSub} style={styles.brackgroundSub}>
            <View style={styles.content}>
              <KeyboardAvoidingView style={styles.contentLogin} 
                                    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <Image source={Logo} style={styles.logo}/>
                <View style={styles.inputBox}>
                    <Input placeholder='E-mail ou Usuário' 
                          colorBorder='#FFFFFF' 
                          backgroundColor='#751DCB'
                          textContentType='emailAddress'
                          width={250}
                          keyboardType='email-address'
                    />
                    <InputPassword/>
                </View>
                <Link tittle='Esqueci a senha'
                      size={12}
                      fontFamily='gotham-medium'
                />
                <Botao tittle='Entrar' 
                      color='#31d57c'
                      width={134}
                      marginTop={24}
                      marginBottom={12}
                      onPress={login}
                />
                <Link tittle='Ou entre com:'
                      size={13}
                      marginBottom={16}
                      fontFamily='gotham-book'
                />
                <View style={styles.boxIcons}>
                  <TouchableOpacity>
                    <Image source={FaceIcon} style={styles.imgIcon}/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={GoogleIcon} style={styles.imgIcon}/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={LinkedinIcon} style={styles.imgIcon}/>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
            
              <View style={styles.boxRegister}>
                <Text style={styles.registerText}>Nova?{'\n'}Crie sua conta gratuitamente</Text>
                <Botao tittle='Cadastrar' 
                      color='#31d57c'
                      width={134}
                      onPress={handleNavigateToRegisterDetails}
                />
              </View>
            </View>
            
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    backngroundPrimary:{
      flex:1,
    },
    brackgroundSub:{
        flex: 1,
        backgroundColor:'#751dcb',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems:'center',
    },
    content:{
      alignItems:'center',
    },
    contentLogin:{
      alignItems:'center',
      position:'relative',
      bottom:40,
    },
    logo:{
      width:147,
      height:42,
      marginBottom:35,
    },
    inputBox:{
      width:250,
      height:96,
    },
    boxIcons:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      width:141,
    },
    imgIcon:{
      width:39,
      height:39,
      marginRight:11,
    },
    boxRegister:{
      alignItems:'center',
      position:'absolute',
      top:'110%',
    },
    registerText:{
      fontSize:13,
      fontFamily:'gotham-medium',
      color:'#fff',
      textAlign:'center',
      marginBottom:27,
    },

});