import React, { useState } from 'react'

import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

import iconDollar from '../../assets/icons/dollar-coin.png'
import iconEye from '../../assets/icons/icon-eye-gray.png'
import iconArrowBottom from '../../assets/icons/icon-arrow-bottom.png'


export default ( ) => {
  const [expanded, setExpanded] = useState(false)
  const handlePress = () => setExpanded(!expanded)
  return(
    <View style={styles.sectionBox}>
            <Text style={styles.tittleText}>Fluxo de Caixa</Text>
            <View style={styles.contentBox}>
              <View style={styles.accountSaldo}>
                <Image source={iconDollar} style={{width:27, height:21,}}/>
                <Text>R$ 24.643,00</Text>
              </View>
              <View style={styles.iconsContainer}>
                <TouchableOpacity>
                  <Image source={iconEye} style={{width:18, height:13,}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress}>

                  <Image source={iconArrowBottom} style={{width:15, height:13,}}/>
                </TouchableOpacity>
                
              </View>
            </View>
          </View>
  );
}


const styles = StyleSheet.create({
  sectionBox:{
    width:350,
    padding:10,
  },
  contentBox:{
    flexDirection:'row',
    width:321,
    height:40,
    elevation:8,
    backgroundColor:'#fff',
    borderRadius:10,
    justifyContent:'space-between',
    alignItems:'center',
  },
  accountSaldo:{
    flexDirection:'row',
    alignItems:'center',
    width:120,
    justifyContent:'space-between',
    marginLeft:10,
  },
  iconsContainer:{
    flexDirection:'row',
    width:40,
    justifyContent:'space-between',
    marginRight:10,
  },
  tittleText:{
    marginBottom:10,
  },
})
