import React, {useState} from 'react'
import  {View, StyleSheet, 
      Image, Text, CheckBox} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import Logo from  '../assets/Logo_iDelas.png'

import Botao from '../components/Button'

export default function TermsContracts(){
  const [isSelected, setSelection] = useState(false);
  const [isAceppt, seAceppt] = useState(false);

  const navigation = useNavigation();

  function handleNavigateToDetalheslDetails(){
    navigation.navigate('Home');
  }
    
    return(
      <View style={styles.container}>
        <View style={styles.backngroundPrimary}>
          <Image source={Logo} style={styles.logo}/>
          <View style={styles.textBox}>
              <Text style={styles.text}>Bem-vinda ao app iDelas, ele foi{'\n'}
                desenvolvido especialmente para você{'\n'}
                resolver de uma vez por todas os{'\n'}
                problemas de gestão financeira do seu{'\n'}
                negócio e consiga viver dele de forma próspera.
                {'\n'}
                {'\n'}
                Todos os seus dados estão protegidos{'\n'}
                de acordo com a Lei Geral de Proteção{'\n'} 
                de Dados em vigência no Brasil e é {'\n'}
                muito importante que você leia e{'\n'} 
                concorde com os termos de usuário.
              </Text>
          </View>
          
          <View style={styles.resendBox}>
            <View style={styles.selectBox}>
              <CheckBox style={styles.checkbox} 
                        value={isSelected} onValueChange={setSelection}/>
              <Text style={styles.label}>
                  Concordo em receber{'\n'}
                  novidades da iDelas
              </Text> 
            </View>
            <View style={styles.selectBox}>
              <CheckBox style={styles.checkbox} 
                        value={isAceppt} onValueChange={seAceppt}
                        />
              <Text style={styles.label}>
                Li e concordo com{'\n'}
                os termos de usuário
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
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    backngroundPrimary:{
      flex:1,    
      backgroundColor:'#691CC7',
        justifyContent: 'center',
        alignItems:'center',
    },
    
    content:{
        alignItems:'center',
      justifyContent:'space-between',
    },
    logo:{
      width:147,
      height:39,
      marginBottom:30,

    },
    textBox:{
        marginBottom:22,
    },
    text:{
        width:355,
        fontSize:16,
        fontFamily:'gotham-book',
        textAlign:'center',
        lineHeight:23,
        color:'#fff',
    },
    mascot:{
        width:118,
        height:175,
    },
    resendBox:{
        width:233,
        alignItems:'center',
        justifyContent:'center',
    },
    selectBox:{
        flexDirection:'row',
    },
    label:{
      fontSize:13,
      fontFamily:'gotham-book',
      lineHeight:20,
      color:'#fff',
    },

});