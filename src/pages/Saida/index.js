import React from 'react'

import {View, SafeAreaView, Text, ScrollView, TouchableOpacity} from 'react-native'

import Avatar from '../../assets/icon-avatar-home.png'
import CirclePlus from '../../assets/plus-circle.svg'
import ConciliacaoIcon from '../../assets/icon-conciliacao-contas.svg'
import IconFilter from '../../assets/icon-filter.svg'

import Styles from '../../pages/Saida/style'

import HeaderSecundary from '../../components/HeaderMenuSecundary'
import Header from '../../components/Header'
import ButtonAdd from '../../components/ButtonAdd'



export default function Saida(){
  const saidas = {
      totalSelecionado:'R$ 5.256,00',
      totalVencido:' R$ 9.099,00',
      totalVencer:'300,0',
      totalConciliado:'R$ 0,00'
    }

    const list = [
      {
        id:1,
        nomeSaida:'Luana Oliveira',
        valorSaida:'R$ 5.256,00',
        tipoDeSaida:'Boleto Bancário',
        categoria:'Categoria: Saídas Regulares',
        tipoOcorrencia:'Ocorrência Mensal: Única',
        tipo:'Aluguel'
      },
      {
        id:2,
        nomeSaida:'Vinicius Souza',
        valorSaida:'R$ 5.256,00',
        tipoDeSaida:'Transferência',
        categoria:'Categoria: Saídas com Seres Humanos',
        tipoOcorrencia:'Ocorrência Parcelada: Mensal',
        tipo:'BENEFÍCIOS'
      },
      {
        id:3,
        nomeSaida:'Paula Goes',
        valorSaida:'R$ 5.256,00',
        tipoDeSaida:'PIX',
        categoria:'Categoria: Saídas com Seres Humanos',
        tipoOcorrencia:'Ocorrência Parcelada: Mensal',
        tipo:'BENEFÍCIOS'
      },
    ]
    
  


  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <View style={Styles.contentContainer}>
          <HeaderSecundary />
          <Header nickName="Renata Mendes" source={Avatar} />

          <View style={Styles.content}>
            <View style={Styles.titulo}>
              <Text style={Styles.textTitulo}>Saidas</Text>
            </View>
          </View>
          {/* Valores de Saidas */}
          <View style={Styles.saidasSection}>
            <View style={Styles.saidasItem}>
              <Text style={Styles.titleSaida}>Total{'\n'}Selecionado</Text>
              <Text style={[Styles.valorSaida, 
                            Styles.colorF]}>{saidas.totalSelecionado}</Text>
            </View>
            <View style={Styles.saidasItem}>
              <Text style={Styles.titleSaida}>Total{'\n'}Vencido</Text>
              <Text style={[Styles.valorSaida, 
                            Styles.colorPink]}
              >
                              {saidas.totalVencido}
              </Text>
            </View>
            <View style={Styles.saidasItem}>
              <Text style={Styles.titleSaida}>Total a{'\n'}Vencer</Text>
              <Text style={[Styles.valorSaida, 
                            Styles.colorOrange]}>
                              {saidas.totalVencer}
              </Text>
            </View>
            <View style={Styles.saidasItem}c >
              <Text style={Styles.titleSaida}>Total a{'\n'}Conciliado</Text>
              <Text style={[Styles.valorSaida, 
                            Styles.colorViolet]}>
                              {saidas.totalConciliado}
              </Text>
            </View> 
          </View>


          {/* Seção de Botões Flutuantes de Adicionar */}
          <View style={Styles.sectionsButton}>
            <ButtonAdd titleButton="Cadastrar Nova Saida">
              <TouchableOpacity>
                <CirclePlus width={16} heigth={16} />
              </TouchableOpacity>
            </ButtonAdd>
            <ButtonAdd titleButton="Conciliação de Contas">
              <TouchableOpacity>
                <ConciliacaoIcon width={17} heigth={24} />
              </TouchableOpacity>
            </ButtonAdd>
          </View>

          <View style={Styles.sectionFilter}>
            <TouchableOpacity style={Styles.buttonFilter}>
                <IconFilter width={20} heigth={20}/>
            </TouchableOpacity>
          </View>


          {list.map(saidas => (
            <View key={saidas.id} style={Styles.cardSaida}>
              <View style={Styles.saidasInfo}>
                <View style={{width:36,height:36,borderRadius:20, backgroundColor:'#691CC7'}}>
                </View>

                <View style={Styles.infoCard}>
                  <View style={Styles.headerCard}>
                    <Text style={Styles.nomeSaida}>{saidas.nomeSaida}</Text>
                    <Text style={Styles.typeOcorrencia}>{saidas.tipoOcorrencia}</Text>
                  </View>

                  <View>
                    <Text style={Styles.textInfoSaida}>{saidas.valorSaida}</Text>
                    <Text style={Styles.textInfoSaida}>{saidas.tipoDeSaida}</Text>
                    <Text style={Styles.textInfoSaida}>{saidas.categoria}</Text>
                  </View>
                </View>
              </View>

             
              <View style={{width:'100%', justifyContent:'center', alignItems:'flex-start', marginBottom:15,}}>
               <Text style={Styles.tipoSaidaText}>{saidas.tipo}</Text>
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