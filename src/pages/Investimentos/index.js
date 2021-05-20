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
  // dados mocados
  const orcamentos = [
    {
      id:1,
      tituloOrcamento:'Aluguel Espaço',
      valorPrevisto:'Valor Previsto',
      taxas:'Taxas',
      impostos: 'Impostos',
      data: 'Data',
      situacao:'Realizado'
    },
    {
      id:2,
      tituloOrcamento:'NOVOS EQUIPAMENTOS',
      valorPrevisto:'Valor Previsto',
      taxas:'Taxas',
      impostos: 'Impostos',
      data: 'Data',
      situacao:'Não Realizado'
    },
    {
      id:2,
      tituloOrcamento:'PINTURA ESCRITÓRIO',
      valorPrevisto:'Valor Previsto',
      taxas:'Taxas',
      impostos: 'Impostos',
      data: 'Data',
      situacao:'Realizado'
    },
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

            {/* Seção de Orçamentos criados*/}
          {orcamentos.map(orcamento =>(
            <View key={orcamento.id} style={Styles.cardOrcamentos}>
              
              <View style={Styles.headerCard}>
                <Text style={Styles.tituloOrcamento}>
                  {orcamento.tituloOrcamento}
                </Text>  
                <Text style={Styles.textHeader}>{orcamento.situacao}</Text>
              </View>

              <Text style={Styles.textValueCard}>{orcamento.valorPrevisto}</Text>
              <Text style={Styles.textValueCard}>{orcamento.taxas}</Text>
              <Text style={Styles.textValueCard}>{orcamento.impostos}</Text>
              <Text style={Styles.textValueCard}>{orcamento.data}</Text>

            </View>
          ))}
            
    
         



          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
