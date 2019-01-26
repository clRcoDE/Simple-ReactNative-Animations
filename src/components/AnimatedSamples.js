import React, { Component } from 'react';
import { View, Text ,StyleSheet , Animated , Dimensions} from 'react-native';
import AnimatedLoading from './AnimatedLoading';
import FadeUpIn from './FadeUpIn';
import HelloOpacity from './HelloOpacity'
import EasingWithEase from './EasingWithEase';
import BreakingCycle from './BreakingCycle';

let deviceWidth = Dimensions.get('window').width

export default class AnimatedSamples extends Component {
  constructor(props) {
    super(props);
    this.state = {

        bigScreen:false,
        miniscreen:false
    };
  }


  componentDidMount(){
    //   console.warn(deviceWidth)
      if(deviceWidth>=1200){
          this.setState({bigScreen:true})
      }else if (deviceWidth>480 && deviceWidth<1200){
          this.setState({bigScreen:false})
      }else{
          this.setState({bigScreen:false,miniScreen:true})
      }
  }

  
  render() {
      
    return (

    
      <View style={[styles.container]}>
        <HelloOpacity/>
        <AnimatedLoading/>
        <EasingWithEase/>
        <FadeUpIn/>
        <BreakingCycle/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
        margin:25,
        backgroundColor:'#f6f6f6',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
