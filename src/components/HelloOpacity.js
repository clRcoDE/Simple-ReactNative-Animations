import React, { Component } from 'react';
import { View, Text ,StyleSheet ,Animated} from 'react-native';

export default class HelloOpacity extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loadOpacity : new Animated.Value(0)
    };
  }
  fadeAnimation() {
    this.state.loadOpacity.setValue(0),
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.loadOpacity, {
          toValue: 1,
          duration: 3000
        })
      ])).start()
  }

  componentDidMount(){
      this.fadeAnimation()
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={[styles.textWrapper, styles.animationContainer]}>
          <Animated.Text
            style={[
              {
                opacity: this.state.loadOpacity,
                fontSize: 30,
                fontWeight: "100",
                color: "#555"
              }
            ]}
          >
            Hello World{" "}
          </Animated.Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container:{
    flexDirection: "row",
    backgroundColor: "white",
    margin: 15,
    elevation: 15,
    height: 125,
    width: 500,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius:6
   } 
});
