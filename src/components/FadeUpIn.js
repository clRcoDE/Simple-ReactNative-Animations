import React, { Component } from 'react';
import { View, Text ,StyleSheet ,Animated,Easing , TouchableHighlight} from 'react-native';

export default class FadeUpIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    upOpacity: new Animated.Value(0),
        upMove : new Animated.Value(0)

    };
  }

  UpAndFade() {
    this.state.upOpacity.setValue(0);
    this.state.upMove.setValue(0);
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.upOpacity, { toValue: 1, duration: 1000 }),
        Animated.timing(this.state.upMove, {
          toValue: 1,
          duration: 1750
        })
      ]),
      Animated.timing(this.state.upOpacity, { toValue: 0, duration: 300 })
    ]).start(() => this.UpAndFade());
  }

  componentDidMount(){
     this.UpAndFade()


  }


  render() {

    const marginToper = this.state.upMove.interpolate({
          inputRange: [0, 1],
          outputRange: [50, -50]
        });


    return (
      <Animated.View style={styles.container}>
            
          <Animated.Text
            style={{
              marginTop: marginToper || 1,
              opacity: this.state.upOpacity,
              fontWeight: "800",
              color: "#333",
              fontSize: 20
            }}
          >
            UP AND FADE
          </Animated.Text>


          {/* <TouchableHighlight
            style={{ width: 50, height: 50, backgroundColor: "royalblue" }}
            onPress={this.UpAndFade}
            underlayColor={"navy"}
          >
            <Text />
          </TouchableHighlight> */}


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
