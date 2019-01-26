import React, { Component } from 'react';
import { View, Text ,StyleSheet ,Animated,Easing , TouchableHighlight} from 'react-native';

export default class FadeUpIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
        breakingOpacity : new Animated.Value(0),
        opacityColor : new Animated.Value(0)

    };
  }

  breakCycle(isRoutine,isReversed){

    if(isRoutine){
    // 0 -> 1
    // console.warn('0->1');
    
    this.state.breakingOpacity.setValue(0),
    this.state.opacityColor.setValue(0)
    Animated.loop(
          Animated.timing(this.state.breakingOpacity, {
            toValue: 1,
            duration: 1500
          })
    ).start()
        
    }
    else{
        if(isReversed){
            // 0.5 -> 0
            // console.warn('0.5 -> 0')
            // console.warn(isReversed)
            this.state.breakingOpacity.setValue(0.6);
    this.state.opacityColor.setValue(1)
    
    Animated.loop(
          Animated.timing(this.state.breakingOpacity, {
            toValue: 0.1,
            duration: 2000
          })
    ).start()
        }
        else{
            // 0 -> 0.5
            // console.warn('0 -> 0.5')
            this.state.breakingOpacity.setValue(0);
    this.state.opacityColor.setValue(2)
    
    Animated.loop(
          Animated.timing(this.state.breakingOpacity, {
            toValue: 0.4,
            duration: 1500
          })
    ).start()
    
        }
    }
    
    }

  componentDidMount(){
     this.breakCycle(1)


  }


  render() {

    const Colors = this.state.opacityColor.interpolate({
        inputRange:[0,1,2],
        outputRange:['black','red','blue']
    })

    return (
      <Animated.View style={styles.container}>
            
          <Animated.View
            style={[styles.animatablesquere,{opacity: this.state.breakingOpacity,backgroundColor:Colors}]}
          />
          <TouchableHighlight
            style={[styles.breakingButton]}
            underlayColor={"grey"}
            onPress={this.breakCycle.bind(this, false, false)}
          >
            <Text>break it up</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.breakingButton]}
            underlayColor={"grey"}
            onPress={this.breakCycle.bind(this, false, true)}
          >
            <Text>break it down</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.breakingButton]}
            underlayColor={"grey"}
            onPress={this.breakCycle.bind(this, true,false)}
          >
            <Text>RESET</Text>
          </TouchableHighlight>

          

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
   } ,
   breakingButton:{
    
    height: 55,
    width: 55,
    elevation: 5,
    borderRadius: 3,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    padding:3

},
animatablesquere:{
backgroundColor: "black",
height: 55,
width: 55,
elevation: 10,
borderRadius: 3,

}
});
