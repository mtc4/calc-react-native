import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { WebBrowser } from 'expo';

import Style from '../constants/Style';

import {
  ButtonDigit,
  ButtonZero,
  ButtonClear,
  ButtonOperation,
  ButtonPlusMinus,
  ButtonComma,
  ButtonPercent,
  ButtonResult } from '../components/Buttons'

export default class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      disp: 0,
      text: 0
      }
  }

  handleClick = (value, prev) => {
    console.log(prev);
    this.setState({
      disp: value,
      text: value || prev
    });
  }

  render() {
    return (
      <View style={Style.screen}>

        <View style={Style.display}>
          <Text style={Style.displayText}>{this.state.disp}</Text>
        </View>

        <View style={Style.buttons}>

          <View style={Style.row}>
            <ButtonClear prev={this.state.prev} currentState={this.state.text} onClick={this.handleClick} value='AC'/>
            <ButtonPlusMinus currentState={this.state.text} onClick={this.handleClick} value='+/-'/>
            <ButtonPercent currentState={this.state.text} onClick={this.handleClick} value='%'/>
            <ButtonOperation currentState={this.state.text} onClick={this.handleClick} value='÷'/>
          </View>

          <View style={Style.row}>
            <ButtonDigit currentState={this.state.text} onClick={this.handleClick} value='1'/>
            <ButtonDigit currentState={this.state.text} onClick={this.handleClick} value='2'/>
            <ButtonDigit currentState={this.state.text} onClick={this.handleClick} value='3'/>
            <ButtonOperation currentState={this.state.text} onClick={this.handleClick} value='×'/>
          </View>

          <View style={Style.row}>
            <ButtonDigit currentState={this.state.text} onClick={this.handleClick} value='4'/>
            <ButtonDigit currentState={this.state.text} onClick={this.handleClick} value='5'/>
            <ButtonDigit currentState={this.state.text} onClick={this.handleClick} value='6'/>
            <ButtonOperation currentState={this.state.text} onClick={this.handleClick} value='-'/>
          </View>

          <View style={Style.row}>
            <ButtonDigit currentState={this.state.text} onClick={this.handleClick} value='7'/>
            <ButtonDigit currentState={this.state.text} onClick={this.handleClick} value='8'/>
            <ButtonDigit currentState={this.state.text} onClick={this.handleClick} value='9'/>
            <ButtonOperation currentState={this.state.text} onClick={this.handleClick} value='+'/>
          </View>

          <View style={Style.row}>
            <ButtonZero currentState={this.state.text} onClick={this.handleClick} value='0'/>
            <ButtonComma currentState={this.state.text} onClick={this.handleClick} value=','/>
            <ButtonResult prev={this.state.prev} currentState={this.state.text} onClick={this.handleClick} value='='/>
          </View>

        </View>

      </View>
    )
  }
}

