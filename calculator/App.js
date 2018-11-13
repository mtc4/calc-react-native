import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SettingsScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <SettingsScreen></SettingsScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
