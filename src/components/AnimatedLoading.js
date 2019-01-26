import React, { Component } from 'react';
import { View, Text ,StyleSheet ,Animated,Easing} from 'react-native';

export default class AnimatedLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loadSpin : new Animated.Value(0)
    };
  }
  spinAnimation() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.loadSpin, {
          toValue: 1,
          delay: 0,
          easing: Easing.linear,
          duration: 1000
        }),
        Animated.timing(this.state.loadSpin, {
          toValue: 2,
          easing: Easing.linear,
          delay: 0,
          duration: 1000
        })
      ])
    ).start();
  }

  componentDidMount(){
      this.spinAnimation()
  }
  render() {

    const spin = this.state.loadSpin.interpolate({
          inputRange: [1, 2],
          outputRange: ["0deg", "360deg"]
        });


    return (
      <View style={styles.container}>
             <Animated.View style={{width:200,flexDirection: 'row',justifyContent: 'space-evenly',alignItems: 'center',}}
        >
          <Animated.Image
            source={require("../Assets/Images/loading.png")}
            style={{ transform: [{ rotate: spin }] }}
          />
          <Animated.Image
            source={require("../Assets/Images/loading1.png")}
            style={{ transform: [{ rotate: spin }] }}
          />
        </Animated.View>
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
