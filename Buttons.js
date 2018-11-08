import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import Style from './Style';

export default class Buttons extends Component {

    render() {
        return (
            <TouchableHighlight style={Style.Btn}
                                underlayColor="#FF9500"
                                onPress={this.props.onPress}>
                <Text style={Style.BtnText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }

}