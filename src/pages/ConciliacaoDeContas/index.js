import React from "react"
import { useNavigation } from "@react-navigation/core"

import AvatarHome from "../../assets/icon-avatar-home.png"

import IconPlusCircle from "../../assets/icons/icon-plus-circle-white.png"

import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native"
import Styles from "./style"

import ArrowIcon from "../../assets/icons/icon-arrow-bottom.png"
import IconArrowTop from "../../assets/icons/icon-arrow-top.png"

import CirclePlus from '../../assets/plus-circle.svg'
import IconDownload from '../../assets/icon-download.svg'
import IconFilter from '../../assets/icon-filter.svg'
import IconLixeira from '../../assets/icon-lixeira.svg'
import IconEdit from '../../assets/icon-editar.svg'
import IconChecked from '../../assets/icon-checked.svg'

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
              <Text style={Styles.textTitulo}>Conciliação de Contas</Text>
            </View>
            <View style={Styles.contentAccount}>
              <View style={Styles.boxAccount}>
                <Text style={Styles.textAcc}>Conta</Text>
                <View style={Styles.boxBank}>
                  <Text style={Styles.textBank}>Banco XYZ</Text>
                  <TouchableOpacity>
                    <Image source={ArrowIcon} style={Styles.iconArrow} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Text style={Styles.textTrans}>
                    Tranferência entre contas
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.Mountante}>
                <Text style={Styles.textSaldo}>Saldo Atual</Text>
                <Text style={Styles.textMoney}>R$2.000,00</Text>
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
                Lançamentos de {"\n"}Entrada
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.button}>
              <TouchableOpacity>
                <CirclePlus width={16} height={16}/>
              </TouchableOpacity>
              <Text style={Styles.buttonText}>Lançamentos de {"\n"}Saida</Text>
            </TouchableOpacity>
          </View>
          {/* Seção de Botões config */}
          <View style={Styles.sectionConfig}>
            <View style={Styles.boxButons}>
              <TouchableOpacity >
                <IconDownload width={20} height={20}/>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.background}>
                <IconFilter width={20} height={20}/>
              </TouchableOpacity>
            </View>
          </View>
          {/* Seção de Cards de Transações */}
          <View style={Styles.cardFinancer}>
            <View style={Styles.headerCard}>
              <Text style={Styles.tituloCard}>Cliente/Fornecedor</Text>
              <TouchableOpacity>
                <Image source={IconArrowTop} style={Styles.arrowIcon} />
              </TouchableOpacity>
            </View>
            <View style={Styles.contentCard}>
              <Text style={Styles.textCard}>#79672</Text>
              <Text style={Styles.textCard}>Tipo: Saida</Text>
              <Text style={Styles.textCard}>Tipo de Saída: Eventual</Text>
              <Text style={Styles.textCard}>
                Forma de Pagamento: Débito Automático
              </Text>
              <Text style={Styles.textCard}>Descrição: Pró-labore</Text>
              <Text style={Styles.textCard}>
                Data de vencimento: 01.03.2021
              </Text>
              <Text style={Styles.textAlertCard}>Saídas com Seres Humanos</Text>
            </View>
            <View style={Styles.footerCard}>
              <Text style={Styles.textCash}>R$ 4.250,00</Text>
              <View style={Styles.boxIcons}>
                <TouchableOpacity>
                  <IconChecked width={16} height={11}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <IconEdit width={14} height={14}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <IconLixeira width={12} height={14}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Segundo Card */}
          <View style={Styles.cardFinancer}>
            <View style={Styles.headerCard}>
              <Text style={Styles.tituloCard}>Mauricio De Souza</Text>
              <TouchableOpacity>
                <Image source={IconArrowTop} style={Styles.arrowIcon} />
              </TouchableOpacity>
            </View>
            <View style={Styles.contentCard}>
              <Text style={Styles.textCard}>Descrição: Pró-labore</Text>
              <Text style={Styles.textCard}>
                Data de Vencimento: 01.03.2021 
              </Text>
              <Text style={Styles.textAlertCard}>Saídas com Seres Humanos</Text>
            </View>
            <View style={Styles.footerCard}>
              <Text style={Styles.textCash}>R$ 4.250,00</Text>
              <View style={Styles.boxIcons}>
              <TouchableOpacity>
                  <IconChecked width={16} height={11}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <IconEdit width={14} height={14}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <IconLixeira width={12} height={14}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Seção de Saldo Total */}
          <View style={Styles.containerSaldo}>
            <Text style={Styles.textSaldoFinal}>Saldo Final</Text>
            <Text style={Styles.textCashFinal}>R$1.700,00</Text>
          </View>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
