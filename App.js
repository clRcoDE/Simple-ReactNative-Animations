/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Dimensions} from 'react-native';
import LayAnimFire from './src/components/LayAnimFire';
import FireLights from './src/components/FireLights'
import LayMyMenu from './src/components/LayMyManu';
// import Loading from './src/components/Loading'
import AnimatedSamples from './src/components/AnimatedSamples'

let deviceWidth = Dimensions.get('window').width



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <LayAnimFire /> */}
        {/* <FireLights/> */}
        {/* <LayMyMenu/> */}
        {/* <Loading load={true}/> */}
        <AnimatedSamples/>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
