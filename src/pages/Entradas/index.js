import React from "react";
import { useNavigation } from "@react-navigation/core"

import AvatarHome from "../../assets/icon-avatar-home.png"

import IconPlusCircle from "../../assets/icons/icon-plus-circle-white.png"
import IconCategorias from '../../assets/icons/icon-categorias.png'
import IconArrow from '../../assets/icons/icon-arrow-bottom.png'

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
              <Text style={Styles.textTitulo}>Entradas</Text>
            </View>
          </View>
          {/*  Seção Recebimento Mensal*/}
          {/* <View style={Styles.containerRecebido}>
            <View style={Styles.boxContainer}>
              <Text>Recebimento Mínimo Necessário Mensal</Text>
            </View>
            <View style={Styles.box}>
              <Text>R$ 2.543,00</Text>
            </View>
          </View> */}

          {/* Seção de Botoes flutuantes */}
          <View style={Styles.sectionButtons}>
            <View style={Styles.button}>
              <TouchableOpacity>
                <Image source={IconPlusCircle} style={Styles.iconCirclePlus} />
              </TouchableOpacity>
              <Text style={Styles.buttonText}>
                Cadastrar{"\n"}Nova Entrada
              </Text>
            </View>
            <View style={Styles.button}>
              <TouchableOpacity>
                <Image source={IconCategorias} style={Styles.iconCirclePlus} />
              </TouchableOpacity>
              <Text style={Styles.buttonText}>Conciliação{"\n"}de Contas</Text>
            </View>
          </View>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
