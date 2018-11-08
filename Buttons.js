import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import Style from './Style';

export default class Buttons extends Component {
    
    render() {
        return (
            <View style={Style.Btn}>
                <Text style={Style.BtnText}>{this.props.value}</Text>
            </View>
        )
    }
    
}