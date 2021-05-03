import React from "react";
import { useNavigation } from "@react-navigation/core"

import AvatarHome from "../../assets/icon-avatar-home.png"


import Mapa from '../../assets/map.png'

import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native"
import Styles from "./style"

import Header from "../../components/Header"

export default function () {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Styles.container}>
          <Header nickName="Renata Mendes" source={AvatarHome} />
          {/* Seção de saldo e escolhas das contas de banco */}
          <View style={Styles.content}>
            <View style={Styles.titulo}>
              <Text style={Styles.textTitulo}>Mapa</Text>
            </View>
          <Image source={Mapa} style={Styles.mapaImg}/>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
