import React from "react";
import { useNavigation } from "@react-navigation/core";

import AvatarHome from "../../assets/icon-avatar-home.png";

import IconPlusCircle from "../../assets/icons/icon-plus-circle-white.png";

import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Styles from "./style";

import ArrowIcon from "../../assets/icons/icon-arrow-bottom.png";
import DownloadIcon from "../../assets/icons/icon-download.png";
import ConfigIcon from "../../assets/icons/icon-toggle-config.png";
import IconArrowTop from "../../assets/icons/icon-arrow-top.png";
import checkIcon from "../../assets/icons/icon-check.png";
import EditIcon from "../../assets/icons/icon-edit.png";
import ThrasIcon from "../../assets/icons/icon-delet-thrash.png";

import Header from "../../components/Header";

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
            <View style={Styles.button}>
              <TouchableOpacity>
                <Image source={IconPlusCircle} style={Styles.iconCirclePlus} />
              </TouchableOpacity>
              <Text style={Styles.buttonText}>
                Lançamentos de {"\n"}Entrada
              </Text>
            </View>
            <View style={Styles.button}>
              <TouchableOpacity>
                <Image source={IconPlusCircle} style={Styles.iconCirclePlus} />
              </TouchableOpacity>
              <Text style={Styles.buttonText}>Lançamentos de {"\n"}Saida</Text>
            </View>
          </View>
          {/* Seção de Botões config */}
          <View style={Styles.sectionConfig}>
            <View style={Styles.boxButons}>
              <TouchableOpacity style={Styles.buttonIcon}>
                <Image source={DownloadIcon} style={Styles.iconImg} />
              </TouchableOpacity>
              <TouchableOpacity style={[Styles.buttonIcon, Styles.background]}>
                <Image source={ConfigIcon} style={Styles.iconImg} />
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
                  <Image source={checkIcon} style={{ width: 19, height: 12 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={EditIcon} style={{ width: 19, height: 19 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={ThrasIcon} style={{ width: 14, height: 18 }} />
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
                  <Image source={checkIcon} style={{ width: 19, height: 12 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={EditIcon} style={{ width: 19, height: 19 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={ThrasIcon} style={{ width: 14, height: 18 }} />
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
