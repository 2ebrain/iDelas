import React from 'react'
import { useNavigation } from '@react-navigation/core'

import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native'
import butonToggle from '../../assets/icons/icon-toggle.png'
import buttonSing from '../../assets/icons/icon-sino.png'
import AvatarHome from '../../assets/icon-avatar-home.png'


import { FontAwesome5 } from '@expo/vector-icons'
import Styles from './style'


export default function (){
  const navigation = useNavigation();
  return(
    <SafeAreaView>
      <View style={Styles.content}>
          {/** Seção do Header*/}
          <View style={Styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image source={butonToggle} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
            <View style={Styles.headerContent}>
              <View style={Styles.realidBox}>
                <Text style={Styles.realidText}>Realizado</Text>
                <FontAwesome5 name="chevron-down" color="#fff" />
              </View>
              <Image source={buttonSing} style={{ width: 20, height: 22 }} />
            </View>
          </View>

          {/* Seção de perfil */}
          <View style={Styles.perfilContainer}>
            <Image source={AvatarHome} style={Styles.avatarHome} />
            <View style={Styles.infoContainer}>
              <Text style={Styles.nameAvatar}>Renata Mendes</Text>
              <View style={Styles.progressContainer}>
                <View style={Styles.barraBorder}>
                  <View style={Styles.barraProgress}></View>
                </View>
                <Text style={Styles.progressText}>NIVEL 1</Text>
              </View>
              <View style={Styles.progressContainer}>
                <View style={Styles.barraBorderBlack}>
                  <View style={Styles.barraProgressBlack}></View>
                </View>
                <Text style={Styles.progressTextBlack}>50 PTS</Text>
              </View>
              <View style={Styles.progressContainer}>
                <View style={Styles.barraBorderGreen}>
                  <View style={Styles.barraProgressGreen}></View>
                </View>
                <Text style={Styles.progressTextGreen}>RF</Text>
              </View>
            </View>
          </View>

         
        
        </View>
    </SafeAreaView>
  )
}

