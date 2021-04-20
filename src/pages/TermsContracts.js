import React, {useState} from 'react'
import  {View, StyleSheet, ImageBackground, Image, Text, CheckBox} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import BrackgroundSub from '../assets/circuitos_.png'
import Logo from  '../assets/Logo_iDelas.png'

import Botao from '../components/Button'

export default function TermsContracts(){
  const [isSelected, setSelection] = useState(false);

  const navigation = useNavigation();

  function handleNavigateToDetalheslDetails(){
    navigation.navigate('Home');
  }
    
    return(
      <View style={styles.container}>
        <View style={styles.backngroundPrimary}>
          <ImageBackground source={BrackgroundSub} style={styles.brackgroundSub}>
              <View style={styles.content}>
                <Image source={Logo} style={styles.logo}/>
                <View style={styles.textBox}>
                    <Text style={styles.text}>Bem vinda ao Idelas, app criado para 
                        você empreendedora que quer aprender e orgazinar melhor o 
                        seu negócio. Nosso app foi feito para você! Antes de 
                        começarmos, precisamos que você nos ajude com algumas 
                        informações para que você possa ter o melhor do nosso 
                        aplicativo. Vamos lá!
                    </Text>
                </View>
                
                <View style={styles.resendBox}>
                    <View style={styles.selectBox}>
                        <CheckBox style={styles.checkbox} value={isSelected} onValueChange={setSelection}/>
                        <Text style={styles.label}>
                            Concordo em receber novidades da iDelas
                        </Text> 
                    </View>
                    <View style={styles.selectBox}>
                        <CheckBox style={styles.checkbox} />
                        <Text style={styles.label}>
                        Li e concordo com os termos de usuário
                        </Text> 
                    </View>
                    
                        <Botao tittle='Continuar' 
                            color='#31d57c'
                            width={199}
                            marginTop={14}
                            onPress={handleNavigateToDetalheslDetails}
                        />
                </View>
              </View>
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
        backgroundColor:'#691CC7',
        justifyContent: 'center',
        alignItems:'center',
    },
    content:{
        alignItems:'center',
      justifyContent:'space-between',
    },
    logo:{
      width:164,
      height:48,
      marginBottom:45,

    },
    textBox:{
        marginBottom:22,
    },
    text:{
        fontSize:18,
        textAlign:'center',
        marginHorizontal:41,
        color:'#fff',
    },
    mascot:{
        width:118,
        height:175,
    },
    resendBox:{
        alignItems:'center',
        justifyContent:'center',
    },
    selectBox:{
        flexDirection:'row',
    },
    label:{
      color:'#fff',
    },

});