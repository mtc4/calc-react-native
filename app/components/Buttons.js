import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import Style from '../constants/Style';

const BaseButton = (props) => {
  return (
    <TouchableOpacity style={props.buttonStyle} onPress={props.pressHandler}>
      <Text style={props.buttonText}>
        {props.value}
      </Text>
    </TouchableOpacity>
  )
}

export class ButtonDigit extends Component {
  pressHandler = () => {
    const { currentState, value, onClick } = this.props;
    if(currentState !== '0') {
      onClick(currentState + value, value);
    } else {
      onClick(value);
    }
  }

  render() {
    return (
      <BaseButton
        buttonStyle={Style.Btn}
        pressHandler={this.pressHandler}
        buttonText={Style.BtnTextWhite}
        value={this.props.value}
      />
    )
  }
}

export class ButtonZero extends Component {
  pressHandler = () => {
    const { currentState, value, onClick } = this.props;
    if(currentState === '0') {
      onClick('0');
    } else {
      onClick(currentState + '0');
    }
  }

  render() {
    return (
      <BaseButton
        buttonStyle={Style.BtnZero}
        pressHandler={this.pressHandler}
        buttonText={Style.BtnZeroTextWhite}
        value={this.props.value}
      />
    )
  }
}

export class ButtonClear extends Component {
  pressHandler = () => {
    const { currentState, value, onClick } = this.props;
    if(value === 'AC') {
      onClick('0',' ');
    }
  }

  render() {
    return (
      <BaseButton
        buttonStyle={Style.BtnTop}
        pressHandler={this.pressHandler}
        buttonText={Style.BtnTextBlack}
        value={this.props.value}
      />
    )
  }
}

export class ButtonOperation extends Component {
  pressHandler = () => {
    const { currentState, value, onClick } = this.props;
    let last = currentState.toString().charAt(currentState.length - 1);
    console.log(last)
    let operations = ['+','-','/','*'];
    let signs = ['+','-','÷','×'];
    let newValue = value;

    signs.forEach(sign => {
        let index = signs.indexOf(sign);
        if (value === sign) {
            newValue = value.replace(sign, operations[index]);
        }
    });
    if('+-*/'.includes(last)) {
      onClick(currentState);
    } else {
      onClick(currentState + newValue);
    }
  }

  render() {
    return (
      <BaseButton
        buttonStyle={Style.BtnRight}
        pressHandler={this.pressHandler}
        buttonText={Style.BtnTextWhite}
        value={this.props.value}
      />
    )
  }
}

export class ButtonPlusMinus extends Component {
  pressHandler = () => {
    const { currentState, value, onClick } = this.props;
    if(currentState === '0') {
      onClick(currentState);
    } else {
      let symbol = currentState.toString().charAt(0);
      let result = '';
      if(symbol === '-') { result = currentState.slice(1); }
      else { result = `-${currentState}`; }
      
      onClick(result);
    }

  }

  render() {
    return (
      <BaseButton
        buttonStyle={Style.BtnTop}
        pressHandler={this.pressHandler}
        buttonText={Style.BtnTextBlack}
        value={this.props.value}
      />
    )
  }
}

export class ButtonComma extends Component {
  pressHandler = () => {
    const { currentState, value, onClick } = this.props;
    if(currentState.toString().includes(',')) {
      onClick(currentState);
    } else {
      onClick(currentState + ',');
    }
  }

  render() {
    return (
      <BaseButton
        buttonStyle={Style.Btn}
        pressHandler={this.pressHandler}
        buttonText={Style.BtnTextWhite}
        value={this.props.value}
      />
    )
  }
}

export class ButtonPercent extends Component {
  pressHandler = () => {
    const { currentState, value, onClick } = this.props;
    let result = +currentState/100;
    onClick(result);
  }

  render() {
    return (
      <BaseButton
        buttonStyle={Style.BtnTop}
        pressHandler={this.pressHandler}
        buttonText={Style.BtnTextBlack}
        value={this.props.value}
      />
    )
  }
}

export class ButtonResult extends Component {
  pressHandler = () => {
    const { currentState, value, onClick, prev } = this.props;
    let operations = ['+','-','/','*'];
    operations.forEach(operation => {
      currentState.split(operation).forEach((elem, index) => {
        if(index === 1 && elem !== '') {
          let result = (new Function(`return ${currentState}`))();
          onClick(result.toString().slice(0,15), `${currentState}`);
        }
      });
    });
  }

  render() {
    return (
      <BaseButton
        buttonStyle={Style.BtnRight}
        pressHandler={this.pressHandler}
        buttonText={Style.BtnTextWhite}
        value={this.props.value}
      />
    )
  }
}

