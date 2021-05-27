import React from "react";
import { useNavigation } from "@react-navigation/core";

import AvatarHome from "../../assets/icon-avatar-home.png";

import IconPlusCircle from "../../assets/icons/icon-plus-circle-white.png";

import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
} from "react-native"
import Styles from "./style"

import Header from "../../components/Header"
import HeaderSecundary from '../../components/HeaderMenuSecundary'

export default function () {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Styles.container}>
          <HeaderSecundary/>
          <Header nickName="Renata Mendes" source={AvatarHome} />
          {/* Seção de saldo e escolhas das contas de banco */}
          <View style={Styles.content}>
            <View style={Styles.titulo}>
              <Text style={Styles.textTitulo}>Relatórios</Text>
            </View>
          </View>

          <View>
            
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
