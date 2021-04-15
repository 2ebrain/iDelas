import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import Confirmation from '../src/pages/Confirmation'
import TermsContracts from '../src/pages/TermsContracts'
import Profile from './pages/Profile'

const { Navigator, Screen} = createStackNavigator();


export default function Routes() {
   return(
    <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login} />
            <Screen name="Register" component={Register} />
            <Screen name="Confirmation" component={Confirmation} />
            <Screen name="TermsContracts" component={TermsContracts} />
            <Screen name="Profile" component={Profile} />
        </Navigator>
    </NavigationContainer>
   );
}