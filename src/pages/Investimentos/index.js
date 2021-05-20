import React from "react"
import { useNavigation } from "@react-navigation/core"

import AvatarHome from "../../assets/icon-avatar-home.png"


import CirclePlus from '../../assets/plus-circle.svg'

import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native"
import Styles from "./style"


import Header from "../../components/Header"
import HeaderSecundary from '../../components/HeaderMenuSecundary'

export default function () {
  const orcamentos = [
    {
      tipoOrcamento: 'Aluguel espaço',
      valores:'R$ / % da meta',
      obrigacoesTrabalhistas: 'Obrigacoes Trabalhistas',
      reservaFinanceira: 'Reserva Financeira',
      Investimentos: 'Investimentos',
      total: 'Total'
    }
  ]



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
              <Text style={Styles.textTitulo}>Orçamento para investimentos Futuros</Text>
            </View>
          </View>
          {/* Seção de Botoes flutuantes */}
          <TouchableOpacity style={Styles.button}>
            <TouchableOpacity>
              <CirclePlus with={16} heigth={16}/>
            </TouchableOpacity>
            <Text style={Styles.buttonText}>
              Cadastrar Produto
            </Text>
          </TouchableOpacity>
            
    
         



          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
