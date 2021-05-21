import React from "react";
import { useNavigation } from "@react-navigation/core"

import AvatarHome from "../../assets/icon-avatar-home.png"

import IconConciliacao from '../../assets/icon-conciliacao-contas.svg'
import CirclePlus from '../../assets/plus-circle.svg'
import IconFilter from '../../assets/icon-filter.svg'

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
  const list = [
    {
      id:1,
      nomeEntrada:'Luana Oliveira',
      valorEntrada:'R$ 5.256,00',
      tipoDeEntrada:'Espécie/Dinheiro',
      categoria:'Entrada Operacional',
      tipoOcorrencia:'Ocorrência Mensal: Única',
      tipo:'Jogo'
    },
    {
      id:2,
      nomeEntrada:'Vinicius Souza',
      valorEntrada:'R$ 5.256,00',
      tipoDeEntrada:'Cartão de Credito',
      categoria:'Entrada Operacional',
      tipoOcorrencia:'Ocorrência Parcelada: Mensal',
      tipo:'Quadrinho'
    },
    {
      id:3,
      nomeEntrada:'Paula Goes',
      valorEntrada:'R$ 5.256,00',
      tipoDeEntrada:'Espécie/Dinheiro',
      categoria:'Categoria: White Label',
      tipoOcorrencia:'Ocorrência Parcelada: Mensal',
      tipo:'App'
    },
  ]


  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Styles.container}>
          <HeaderSecundary/>
          <Header nickName="Renata Mendes" source={AvatarHome} />
          {/* Seção Saldo de entrada, contendo o titulo Entrada
          e tambem o input com o saldo de recebimento minimo
          */}
          <View style={Styles.content}>
            <View style={Styles.titulo}>
              <Text style={Styles.textTitulo}>Entradas</Text>
            </View>
          </View>

          {/* Componente de Saldo/ Recebimento Minimo */}
          <View style={Styles.sectionSaldo}>
            <View style={Styles.inputRecebimento}>
              <Text style={Styles.titleRecebimento}>Recebimento Mínimo Necessário Mensal</Text>
              <View style={Styles.inputSaldo}>
                <Text style={Styles.textSaldo}>R$ 2.543,00</Text>
                <Text style={[Styles.textSaldo, {borderLeftWidth:1}, {borderLeftColor:'#fff'}]}>50%s</Text>
              </View>
            </View>
          </View>
          

          {/* Seção de Botoes flutuantes */}
          <View style={Styles.sectionButtons}>
            <TouchableOpacity style={Styles.button}>
              <TouchableOpacity>
                <CirclePlus width={16} height={16}/>
              </TouchableOpacity>
              <Text style={Styles.buttonText}>
                Cadastrar{"\n"}Nova Entrada
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.button}>
              <TouchableOpacity>
                <IconConciliacao width={17} height={24}/>
              </TouchableOpacity>
              <Text style={Styles.buttonText}>Conciliação{"\n"}de Contas</Text>
            </TouchableOpacity>
          </View>

          {/* Seção de butão de filtragem da view */}
          <View style={Styles.sectionFilter}>
            <TouchableOpacity style={Styles.buttonFilter}>
              <IconFilter width={20} height={20}/>
            </TouchableOpacity>
          </View>


          {list.map(entrada => (
            <View key={entrada.id} style={Styles.cardEntrada}>
              <View style={Styles.entradasInfo}>
                <View style={{width:36,height:36,borderRadius:20, backgroundColor:'#691CC7'}}>
                </View>

                <View style={Styles.infoCard}>
                  <View style={Styles.headerCard}>
                    <Text style={Styles.nomeEntrada}>{entrada.nomeEntrada}</Text>
                    <Text style={Styles.typeOcorrencia}>{entrada.tipoOcorrencia}</Text>
                  </View>

                  <View>
                    <Text style={Styles.textInfoEntrada}>{entrada.valorEntrada}</Text>
                    <Text style={Styles.textInfoEntrada}>{entrada.tipoDeEntrada}</Text>
                    <Text style={Styles.textInfoEntrada}>{entrada.categoria}</Text>
                  </View>
                </View>
              </View>

             
              <View style={{width:'100%', justifyContent:'center', alignItems:'flex-start', marginBottom:15,}}>
               <Text style={Styles.tipoEntradaText}>{entrada.tipo}</Text>
              </View>

              <View style={Styles.sectionButotns}>
                <TouchableOpacity style={Styles.buttonRealizar}>
                  <Text style={Styles.buttonTextRealziar}>Realizar Recebimento</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.buttonRealizar}>
                  <Text style={Styles.buttonTextRealziar}>Realizar Cobrança</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
