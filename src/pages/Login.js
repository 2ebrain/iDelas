import React from 'react'
import  {SafeAreaView, View, StyleSheet, ImageBackground, Image, Text, StatusBar} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import BrackgroundSub from '../assets/circuitos_.png'
import Logo from  '../assets/Logo_iDelas.png'

import FaceIcon from '../assets/face_icon_78x78.png'
import GoogleIcon from '../assets/google_icon_78x78.png'
import LinkedinIcon from '../assets/linkedin_icon_78x78.png'

import Input from '../components/Input'
import InputPassword from '../components/PasswordInput'
import Link from '../components/Link'
import Botao from '../components/Button'

export default function Login(){
  const navigation = useNavigation();

  function handleNavigateToRegisterDetails(){
    navigation.navigate('Register');
  }
  function handleNavigateToPerfilDetails(){
    navigation.navigate('Profile');
  }
    return(
      <SafeAreaView style={styles.container}>
        <StatusBar/>
        <View style={styles.backngroundPrimary}>
          <ImageBackground source={BrackgroundSub} style={styles.brackgroundSub}>
              <View style={styles.content}>
                <Image source={Logo} style={styles.logo}/>
                <View style={styles.inputBox}>
                    <Input placeholder='E-mail ou Usuário' 
                          colorBorder='#FFFFFF' 
                          textContentType='emailAddress'
                          width={250}
                    />
                    <InputPassword/>
                </View>
                <Link tittle='Esqueci a senha'
                      size={12}
                />
                <Botao tittle='Entrar' 
                      color='#31d57c'
                      width={120}
                      marginTop={25}
                      marginBottom={12}
                      onPress={handleNavigateToPerfilDetails}
                />
                <Link tittle='Ou entre com:'
                      size={13}
                      marginBottom={16}
                />
                <View style={styles.boxIcons}>
                  <Image source={FaceIcon} style={styles.imgIcon}/>
                  <Image source={GoogleIcon} style={styles.imgIcon}/>
                  <Image source={LinkedinIcon} style={styles.imgIcon}/>
                </View>
                <View style={styles.boxRegister}>
                  <Text style={styles.registerText}>Nova?{'\n'} Crie sua conta gratuitamente</Text>
                  <Botao tittle='Cadastrar' 
                        color='#31d57c'
                        width={120}
                        onPress={handleNavigateToRegisterDetails}
                  />
                </View>
              </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
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
        backgroundColor:'#751dcb',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems:'center',
    },
    content:{
      alignItems:'center',
    },
    logo:{
      width:164,
      height:48,
      marginBottom:45,

    },
    inputBox:{
      width:250,
      height:96,
    },
    boxIcons:{
      flexDirection:'row',
    },
    imgIcon:{
      width:50,
      height:50,
      marginRight:11,
    },
    boxRegister:{
      alignItems:'center',
      position:'absolute',
      top:'110%',
    },
    registerText:{
      color:'#fff',
      textAlign:'center',
      marginBottom:25,
    },

});