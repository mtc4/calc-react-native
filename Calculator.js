import React, { Component } from 'react';
import {
    Text,
    View,
    AppRegistry
} from 'react-native';

class Calculator extends Component {

import Style from './Style';

render() {
    return (
        <View style={Style.container}>
            <View style={Style.display}></View>
            <View style={Style.buttons}></View>
        </View>
    )
}

}

AppRegistry.registerComponent('Calculator', () => Calculator);