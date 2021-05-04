import React from 'react'

import { useNavigation } from '@react-navigation/core'

import BarraPoorcentagem from '../Barraprogrs'

import {Text, View, TouchableOpacity, Image} from 'react-native'


import Styles from './style'

export default function (props){
  const navigation = useNavigation();
  return(  
      <>    
      <View style={Styles.perfilContainer}>
        <TouchableOpacity>
          <Image source={props.source} style={Styles.avatarHome}/>
        </TouchableOpacity>

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

