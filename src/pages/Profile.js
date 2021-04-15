import React from 'react'
import  {View, StyleSheet, ImageBackground, Image, Text} from 'react-native'

import BrackgroundSub from '../assets/backgroundSub.png'

import Botao from '../components/Button'

export default function Profile(){
    
    return(
      <View style={styles.container}>
        <View style={styles.backngroundPrimary}>
          <ImageBackground source={BrackgroundSub} style={styles.brackgroundSub}>
              <View style={styles.content}>
                  <Text style={styles.text}>Perfil em construção...</Text>
                  <Botao color='#B49AA8'
                            tittle='Em Breve'
                            width={200}
                            />  
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
        justifyContent: 'center',
        alignItems:'center',
    },
    content:{
        alignItems:'center',
      justifyContent:'space-between',
    },
    text:{
        fontSize:18,
        textAlign:'center',
        marginHorizontal:41,
        color:'#676F72',
    },
    

});