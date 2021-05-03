import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../src/pages/Login'
import Register from '../src/pages/Register'

import Confirmation from '../src/pages/Confirmation'
import TermsContracts from '../src/pages/TermsContracts'

import NiveisDeCixa from '../src/pages/NiveisDeCaixa'
import Detalhes from '../src/pages/Detalhes'
import Home from './pages/Home'
import ConciliacaoDeContas from './pages/ConciliacaoDeContas'
import TestView from './pages/ViewLoading'
import ProdutosServicos from './pages/ProdutosServicos'
import Relatorios from './pages/Relatorios'
import Categorias from './pages/Categorias'
import MyNegoces from './pages/MeuNegocio'
import FuncionariosSocios from './pages/FuncionariosSocios'
import Entradas from './pages/Entradas'

const { Navigator, Screen} = createStackNavigator();


export default function Routes() {
   return(
    <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login} />
            <Screen name="Register" component={Register} />
            <Screen name="Confirmation" component={Confirmation} />
            <Screen name="TermsContracts" component={TermsContracts} />
            <Screen name="NiveisDeCaixa" component={NiveisDeCixa} />
            <Screen name="Detalhes" component={Detalhes} />
            <Screen name="Home" component={Home} />
            <Screen name="ConciliacaoDeContas" component={ConciliacaoDeContas}/>
            <Screen name="TestView" component={TestView}/>
            <Screen name="ProdutosServicos" component={ProdutosServicos}/>
            <Screen name="Relatorios" component={Relatorios}/>
            <Screen name="Categorias" component={Categorias}/>
            <Screen name="MyNegoces" component={MyNegoces}/>
            <Screen name="FuncionariosSocios" component={FuncionariosSocios}/>
            <Screen name="Entradas" component={Entradas}/>
        </Navigator>
    </NavigationContainer>
   );
}