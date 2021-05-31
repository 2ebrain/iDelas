import React from "react";
import { useNavigation } from "@react-navigation/core";

import AvatarHome from "../../assets/icon-avatar-home.png";

import IconPlusCircle from "../../assets/plus-circle.svg";
import ArrowPurple from '../../assets/arrow-purple-bottom.svg'
import EyeGray from '../../assets/eye-gray.svg'
import EditGray from '../../assets/edit-gray.svg'
import DownloadGray from '../../assets/download-gray.svg'

import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native"
import Styles from "./style"

import Header from "../../components/Header"
import HeaderSecundary from '../../components/HeaderMenuSecundary'
import ButtonAdd from '../../components/ButtonAdd'
import CardPlan from '../../components/CardPlano'


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

          <View style={Styles.sectionButtons}>
            <ButtonAdd titleButton='Novo Relatório' widthText={200}>
              <IconPlusCircle width={14} heigth={14}/>
            </ButtonAdd>

            <View style={Styles.buttonsFilter}>
              <TouchableOpacity style={Styles.buttonFilter}>
                <Text style={Styles.textButonFilter}>Mensal</Text>
                <ArrowPurple width={10} heigth={10}/>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.buttonFilter}>
                <Text style={Styles.textButonFilter}>Janeiro</Text>
                <ArrowPurple width={10} heigth={10}/>
              </TouchableOpacity>
            </View>
          </View>


        <View style={Styles.containerPlans}>
          <CardPlan titlePlan="Plano de Entradas"/>
          <CardPlan titlePlan="Plano de Saídas"/>
          <CardPlan titlePlan="Fluxo de Caixa"/>
          <CardPlan titlePlan="Resultado Financeiro"/>
          <CardPlan titlePlan="Análise Financeira"/>
          <CardPlan titlePlan="Orçado x Realizado"/>
          <CardPlan titlePlan="Precificação"/>

        </View>

          
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
