import React from 'react'
import {SafeAreaView, View, ScrollView, Text, TouchableOpacity} from 'react-native'

import Avatar from '../../assets/icon-avatar-home.png'

import SinoOrange from '../../assets/icon-sino-orange.svg'
import CirclePlus from '../../assets/plus-circle.svg'

import Styles from './style'

import HeaderMenuSecundary from '../../components/HeaderMenuSecundary'
import Header from '../../components/Header'
import ButtonAdd from '../../components/ButtonAdd'

export default function CobrancasPendentes(){
  return(
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <View style={{justifyContent:'center', alignItems:'center',}}>
          <HeaderMenuSecundary/>
          <Header nickName='Renata Mendes' source={Avatar}/>

          <View style={Styles.content}>
            <View style={Styles.titulo}>
              <Text style={Styles.textTitulo}>Cobrança</Text>
            </View>
          </View>

          {/* Seção de valor da inadimplencia */}
          <View style={Styles.inadimValor}> 
            <View style={Styles.boxValorinadim}> 
              <Text style={Styles.valorInadim}>
                25%
              </Text>
            </View>

            <Text style={Styles.saldoValorInadim}>
                Valor de Inadimplência: R$ 2.564,31
            </Text>
          </View>

          {/* Seção de notificação de lançamentos */}
          <View style={Styles.boxNotification}>
            <View style={{marginLeft:16,}}>
              <SinoOrange width={17} heigth={19} />
            </View>
            <Text style={Styles.textNotification}>
              Você possui lançamentos em aberto e sua média
              de inadimplência é de <Text style={Styles.textStrong}>20 dias</Text>.
            </Text>
          </View>

          {/* Button adicionar */}
          <View style={Styles.buttonSection}>
            <ButtonAdd titleButton='Cadastrar nova cobrança' 
                      widthText={200}>
              <TouchableOpacity>
               <CirclePlus width={16} heigth={16} color='#CBB3E8'/>
              </TouchableOpacity>
            </ButtonAdd>
          </View>

          <View style={Styles.sectionAutoManual}>
            <View style={Styles.buttonBox}> 
              <View>
                <Text style={{fontSize:9, color:'#898989'}}>Cobrança</Text>
              </View>

              <View style={Styles.sectionClick}>

                <TouchableOpacity style={Styles.buttonManual}>
                  <Text style={Styles.textButton}>Manual</Text>
                </TouchableOpacity>
              
                <TouchableOpacity style={Styles.buttonAuto}>
                  <Text style={Styles.textButtonWhite}>Automática</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}