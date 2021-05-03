import React from 'react'

import { useNavigation } from '@react-navigation/core'

import BarraPoorcentagem from '../Barraprogrs'

import {Text, View, TouchableOpacity, Image} from 'react-native'

import buttonSing from '../../assets/icons/icon-sino.png'

import ArrowLif from '../../assets/icons/icon-back.png'
import Interrogacao from '../../assets/icons/icon-interrogacao.png'


import Styles from './style'

export default function (props){
  const navigation = useNavigation();
  return(  
      <>
      <View style={Styles.header}>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={ArrowLif} style={{ width: 50, height: 16 }} />
        </TouchableOpacity>

        <View style={Styles.headerContent}>
          <TouchableOpacity>
            <Image source={Interrogacao} style={{ width: 15, height: 25 }} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={buttonSing} style={{ width: 20, height: 22 }} />
          </TouchableOpacity>
        </View>

      </View>

    
      <View style={Styles.perfilContainer}>
        <Image source={props.source} style={Styles.avatarHome} />

        <View style={Styles.infoContainer}>

          <Text style={Styles.nameAvatar}>{props.nickName}</Text>
           <BarraPoorcentagem
            title='NIVEL'
            colortitle='#691CC7'
            borderColor='#7B1DCC'
            backgroundColor='#7B1DCC'
            porcemtagem={85 }
           />
           <BarraPoorcentagem
            title='50 PTS'
            colortitle='#000'
            borderColor='#000'
            backgroundColor='#000'
            porcemtagem={55}
           />
           <BarraPoorcentagem
            title='RF'
            colortitle='#FFF'
            borderColor='#40CC4B'
            backgroundColor='#40CC4B'
            backgroundColorTitle='#40CC4B'
            porcemtagem={75}
           />
        </View>

      </View>

      </>  
  )
}

