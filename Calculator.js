import React, { Component } from 'react';
import {
    Text,
    View,
    AppRegistry
} from 'react-native';
import Button from './Buttons';
const buttonsList = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];
class Calculator extends Component {

import Style from './Style';

render() {
    return (
        <View style={Style.container}>
            <View style={Style.display}></View>
            <View style={Style.buttons}>
		{this.renderButtons()}
	    </View>
        </View>
    )
}

renderButtons() {

        let views = [];

        for (var r = 0; r < buttonsList.length; r ++) {
            let row = buttonsList[r];

            let row = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];

                row.push(
                    <Button value={input} key={r + "-" + i} />
                );
            }

            views.push(<View style={{flex: 1, flexDirection: 'row'}} key={"row-" + r}>{row}</View>)
        }

        return views;

}

}

AppRegistry.registerComponent('Calculator', () => Calculator);