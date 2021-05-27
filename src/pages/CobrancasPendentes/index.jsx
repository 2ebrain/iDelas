import React from 'react'
import {SafeAreaView, 
          View, ScrollView, 
          Text, TouchableOpacity} from 'react-native'

import Avatar from '../../assets/icon-avatar-home.png'

import SinoOrange from '../../assets/icon-sino-orange.svg'
import CirclePlus from '../../assets/plus-circle.svg'
import CobrancaIcon from '../../assets/CobrarPorE-mail.svg'
import HistoricoIcon from '../../assets/HistoricodeCobrança.svg'
import WhatsIcon from '../../assets/Whatsapp.svg'

import Styles from './style'

import HeaderMenuSecundary from '../../components/HeaderMenuSecundary'
import Header from '../../components/Header'
import ButtonAdd from '../../components/ButtonAdd'
import ListTitle from '../../components/ListTitles'

export default function CobrancasPendentes(){

  const listDados = [
    {
      id:1,
      nomePessoa:'Luis Mesquita',
      tipoCobranca:'Cobrança Anual',
      recebimento:'20.10.2020 RECEBIDO',
      emailCobranca:'20.10.2020   E-MAIL DE COBRANÇA ATIVA REALIZADA',
      dataSugerida:'15.11.2020   DATA SUGERIDA',
      compraEfetuada:'xxxx',
      valorPagar:'xxxx',
      dataVencimento:'xxxx',
      lancamentoAberto:'xxxx'
    },
    {
      id:2,
      nomePessoa:'Cintia Mendes',
      tipoCobranca:'Cobrança Anual',
      recebimento:'20.10.2020 RECEBIDO',
      emailCobranca:'20.10.2020   E-MAIL DE COBRANÇA ATIVA REALIZADA',
      dataSugerida:'15.11.2020   DATA SUGERIDA',
      compraEfetuada:'xxxx',
      valorPagar:'xxxx',
      dataVencimento:'xxxx',
      lancamentoAberto:'xxxx'
    },
  ]

 




  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <HeaderMenuSecundary />
          <Header nickName="Renata Mendes" source={Avatar} />

          <View style={Styles.content}>
            <View style={Styles.titulo}>
              <Text style={Styles.textTitulo}>Cobrança</Text>
            </View>
          </View>

          {/* Seção de valor da inadimplencia */}
          <View style={Styles.inadimValor}>
            <View style={Styles.boxValorinadim}>
              <Text style={Styles.valorInadim}>25%</Text>
            </View>

            <Text style={Styles.saldoValorInadim}>
              Valor de Inadimplência: R$ 2.564,31
            </Text>
          </View>

          {/* Seção de notificação de lançamentos */}
          <View style={Styles.boxNotification}>
            <View style={{ marginLeft: 16 }}>
              <SinoOrange width={17} heigth={19} />
            </View>
            <Text style={Styles.textNotification}>
              Você possui lançamentos em aberto e sua média de inadimplência é
              de <Text style={Styles.textStrong}>20 dias</Text>.
            </Text>
          </View>

          {/* Button adicionar */}
          <View style={Styles.buttonSection}>
            <ButtonAdd titleButton="Cadastrar nova cobrança" widthText={200}>
              <TouchableOpacity>
                <CirclePlus width={16} heigth={16} color="#CBB3E8" />
              </TouchableOpacity>
            </ButtonAdd>
          </View>

          {/* Botões de filtragem Manual e automatico */}
          <View style={Styles.sectionAutoManual}>
            <View style={Styles.buttonBox}>
              <View>
                <Text style={{ fontSize: 9, color: "#898989" }}>Cobrança</Text>
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

          {/* Seção de lista de cobranças */}
            {listDados.map((dado) => (
              <View style={Styles.cardCobrancas} key={dado.id}>
                {/* Header do card */}
                <View style={Styles.headerCard}>
                  <TouchableOpacity
                    style={Styles.userAvatar}
                  ></TouchableOpacity>

                  <Text style={Styles.textName}>{dado.nomePessoa}</Text>
                </View>

                {/* Seção de notificações de cobrança */}
                <ListTitle titlePrimary={dado.tipoCobranca}
                          titleSecondary={dado.recebimento}
                          titleThird={dado.emailCobranca}
                          />
                

                <View style={Styles.cardValores}>
                  <Text style={Styles.textValores}>Compra efetuada ............. {dado.compraEfetuada}</Text>
                  <Text style={Styles.textValores}>Valor à pagar ...................... {dado.valorPagar}</Text>
                  <Text style={Styles.textValores}>Data de vencimento ............. {dado.dataVencimento}</Text>
                  <Text style={Styles.textValores}>Lançamento em aberto ............. {dado.lancamentoAberto}</Text>
                </View>

                {/* Seção de Botões de contato */}
                <View style={Styles.sectionButtons}>
                  <TouchableOpacity style={Styles.buttonSocial}>
                    <CobrancaIcon width={36} heigth={21}/>
                    <Text style={Styles.textButtonSocial}>Cobrar por{'\n'} e-mail </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Styles.buttonSocial}>
                    <WhatsIcon width={27} heigth={27}/>
                    <Text style={Styles.textButtonSocial}>WhatsApp</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Styles.buttonSocial}>
                    <HistoricoIcon width={22} heigth={22}/>
                    <Text style={Styles.textButtonSocial}>Histórico{'\n'}de Cobrança</Text>
                  </TouchableOpacity>
                </View>

                <View style={Styles.cardSecitionTwo}>
                <ListTitle titlePrimary={dado.tipoCobranca}
                          titleSecondary={dado.recebimento}
                          titleThird={dado.emailCobranca}
                          testeTitulo={dado.dataSugerida}
                          backgroundColorPrimary='#F7AB8E'
                          />

                  <View style={Styles.cardValores}>
                  <Text style={Styles.textValores}>Compra efetuada ............. {dado.compraEfetuada}</Text>
                  <Text style={Styles.textValores}>Valor à pagar ...................... {dado.valorPagar}</Text>
                  <Text style={Styles.textValores}>Data de vencimento ............. {dado.dataVencimento}</Text>
                  <Text style={Styles.textValores}>Lançamento em aberto ............. {dado.lancamentoAberto}</Text>
                  </View>

                  <View style={Styles.sectionButtons}>
                  <TouchableOpacity style={Styles.buttonSocial}>
                    <CobrancaIcon width={36} heigth={21}/>
                    <Text style={Styles.textButtonSocial}>Cobrar por{'\n'} e-mail </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Styles.buttonSocial}>
                    <WhatsIcon width={27} heigth={27}/>
                    <Text style={Styles.textButtonSocial}>WhatsApp</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Styles.buttonSocial}>
                    <HistoricoIcon width={22} heigth={22}/>
                    <Text style={Styles.textButtonSocial}>Histórico{'\n'}de Cobrança</Text>
                  </TouchableOpacity>
                </View>
                </View>
              </View>
            ))}
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}