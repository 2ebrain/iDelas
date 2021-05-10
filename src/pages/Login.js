import React, { Component } from 'react'
import  {SafeAreaView, View, 
                      StyleSheet, 
                      ImageBackground, 
                      Image, Text, TouchableOpacity, 
                      KeyboardAvoidingView, Button, Alert, ActivityIndicator, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import firebase from './database/firebase';

import BrackgroundSub from '../assets/circuitos_.png'
import Logo from  '../assets/Logo_iDelas.png'

import FaceIcon from '../assets/icons/icon-facebook.png'
import GoogleIcon from '../assets/icons/icon-google.png'  
import LinkedinIcon from '../assets/icons/icon-linkedin.png'

import Input from '../components/Input'
import InputPassword from '../components/PasswordInput'
import Link from '../components/Link'
import Botao from '../components/Button'

export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
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

  userLogin = () => {
    if(this.state.email === '' || this.state.password === '') {
      Alert.alert('Email ou senha incorreta!')
    }
    else {
      this.setState({
        isLoading: true,
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
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
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
                  
                    <Input
                          placeholder="Email"
                          colorBorder='#FFFFFF' 
                          width={250}
                          value={this.state.email}
                          onChangeText={(val) => this.updateInputVal(val, 'email')}
                    />
                    
                    <Input
                          style={styles.inputStyle}
                          placeholder="Password"
                          colorBorder='#FFFFFF' 
                          width={250}
                          value={this.state.password}
                          onChangeText={(val) => this.updateInputVal(val, 'password')}
                          maxLength={15}
                          secureTextEntry={true}
                    />   
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
                      onPress={() =>  this.userLogin()}
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
                      onPress={() => this.props.navigation.navigate('Register')}
                />
              </View>
            </View>
            
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}
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