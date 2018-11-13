import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import Buttons from '../components/Buttons';
import Style from '../constants/Style';


export default class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  render() {
    return (
    <View style={Style.screen}>
      <View style={Style.display}>
        <Text style={Style.displayText}>{this.state.value | 0}</Text>
      </View>
      
      <View style={Style.buttons}>
        <Buttons></Buttons>
      </View>
    </View>
    )
  }

}
