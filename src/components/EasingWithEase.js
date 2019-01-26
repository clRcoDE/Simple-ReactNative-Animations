import React, { Component } from 'react';
import { View, Text ,StyleSheet ,Animated,Easing} from 'react-native';

export default class EasingWithEase extends Component {
  constructor(props) {
    super(props);
    this.state = {
    easeAnimation : new Animated.Value(0),
    fadeOpacity : new Animated.Value(0),

    };
  }

  easingAnimate() {
    this.state.easeAnimation.setValue(0);
    this.state.fadeOpacity.setValue(0);
    Animated.sequence([
      Animated.timing(this.state.fadeOpacity, {
        toValue: 1,
        duration: 500,
        delay:0
      }),
      Animated.timing(this.state.easeAnimation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }),
      Animated.timing(this.state.fadeOpacity, {
        toValue: 0,
        duration: 500,
        delay:0
      })
      // Animated.timing(this.myopacity,{toValue:0,duration:2000})
    ]).start(() => this.easingAnimate());
  }

  componentDidMount(){
     this.easingAnimate()


  }


  render() {

    const marginLefter = this.state.easeAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [-200, 200]
        });


    return (
      <Animated.View style={styles.container}>
            <Animated.View style={{justifyContent: 'center',alignItems: 'center',}}>
          <Animated.View
            style={{
              backgroundColor: "#555",
              width: 50,
              height: 50,
              marginLeft: marginLefter || 0,
              opacity: this.state.fadeOpacity
            }}
          />
        </Animated.View>
      </Animated.View>
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
