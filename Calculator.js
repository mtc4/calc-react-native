import React, { Component } from 'react';
import {
    Text,
    View,
    AppRegistry
} from 'react-native';

class Calculator extends Component {

var Style = StyleSheet.create({
	container: {
		flex: 1,
	},
	display: {
		flex: 2, 
		backgroundColor: '#1C1C1C'
	}
	buttons: {
		flex: 8, 
		backgroundColor: '#505050'
	}
});

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