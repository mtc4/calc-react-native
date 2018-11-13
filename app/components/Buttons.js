import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import Style from '../constants/Style';

const buttonsList = [
    [ 'C', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', ',', '=']
];

export default class Buttons extends Component {

    render() {
        let views = [];
        for (var r = 0; r < buttonsList.length; r++) {
            let row = buttonsList[r];
            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];
                let style = r === 0 && i < 3 ? Style.BtnTop : (row.length-1) === i ? Style.BtnRight : Style.Btn;
                let textColor = r === 0 && i < 3 ? Style.BtnTextBlack : Style.BtnTextWhite;
                    style = input === '0' ? Style.BtnZero : style;
                inputRow.push(
                    (
                        <TouchableHighlight key={"th-" + i} style={style}
                                            underlayColor="#575757"
                                            onPress={this.props.onPress}>
                            <Text style={textColor}>{input}</Text>
                        </TouchableHighlight>
                    )
                )
            }
            views.push(<View style={Style.column} key={"col-" + r}>{inputRow}</View>)

        }

        return views;
    }
/*
    _renderButtons() {

        let views = [];
        for (var r = 0; r < buttonsList.length; r ++) {
            let row = buttonsList[r];
            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];

                inputRow.push(
                    <Buttons value={input} style={Style.BtnRight} onPress={this.onButtonPress.bind(this, input)} key={r + "-" + i} />
                );
            }

            views.push(<View style={Style.column} key={"row-" + r}>{inputRow}</View>)
        }

        return views;
    }
    */

}