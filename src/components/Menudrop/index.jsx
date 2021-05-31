import DropdownMenu from 'react-native-dropdown-menu'
import React, {Component} from 'react'

import {View, Text } from 'react-native'
 
export default class Demo extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  
  render() {
    var data = [["Realizado", "Em aberto", "A Realizar", "Todos"]];
    return (
      <View style={{flex: 1}}>
        <View style={{height: 64}} />
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          // arrowImg={}      
          // checkImage={}   
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}} 
          // maxHeight={300} 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >
 
          <View style={{flex: 1}}>
            <Text>
              {this.state.text} Realizado
            </Text>
          </View>
 
        </DropdownMenu>
      </View>
    );
  }
  
}