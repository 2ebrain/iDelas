import React from 'react'
import  {View, StyleSheet, Image, Text, SafeAreaView} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import Logo from  '../assets/Logo_iDelas.png'
import Mascot from '../assets/Mascot_236x350.png.png'

import Link from '../components/Link'

import Botao from '../components/Button'

export default function Confirmation(){
    const navigation = useNavigation();

  function handleNavigateToTermsDetails(){
    navigation.navigate('TermsContracts');
  }
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.backngroundPrimary}>
              <View style={styles.content}>
                <Image source={Logo} style={styles.logo}/>
                <View style={styles.textBox}>
                    <Text style={styles.text}>
                      Falta pouco! Confirme seu endereço{'\n'} 
                      de e-mail para começar a resolver a{'\n'} 
                      gestão financeira{'\n'}de seu negócio. 
                    </Text>
                </View>
                <Image source={Mascot}
                      style={styles.mascot}
                />
                <View style={styles.resendBox}>
                    <Link size={15}
                        tittle='Não recebeu?'
                    />
                    <Botao tittle='Reenviar e-mail' 
                        color='#31d57c'
                        width={199}
                        marginTop={14}
                        onPress={handleNavigateToTermsDetails}
                    />
                </View>
              </View>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    backngroundPrimary:{
      width:'100%',
      flex:1,
      backgroundColor:'#F3F0E8',
    },
    content:{
      flex:1,
      width:'100%',
      backgroundColor:'#751dcb',
      justifyContent: 'center',
      alignItems:'center',
    },
    logo:{
      width:147,
      height:42,
      marginBottom:21,
    },
    textBox:{
        marginBottom:22,
    },
    text:{
        fontSize:18,
        width:'90%',
        textAlign:'center',
        color:'#fff',
        lineHeight:21,
    },
    mascot:{
        width:116,
        height:175,
    },
    resendBox:{
        alignItems:'center',
        justifyContent:'center',
    },

});