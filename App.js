/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LayAnimFire from './src/components/LayAnimFire';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LayAnimFire />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
