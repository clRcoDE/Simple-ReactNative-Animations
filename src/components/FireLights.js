import React, { Component } from "react";
import { View, Text, StyleSheet, Image,TouchableHighlight,UIManager,LayoutAnimation ,Dimensions} from "react-native";

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class FireLights extends Component {
  constructor(props) {
    super(props);
    this.state = { widthX:0 , heightY:0, marginL:0,toggle:false,isShowLight:false};
  }
toggler=()=>{
LayoutAnimation.configureNext(this.configbuttonAnimate)

    if(this.state.toggle===false){
        this.setState({marginL:45,toggle:true,widthX:400,heightY:400,isShowLight:true})
    }
    else{
        this.setState({marginL:0,toggle:false,widthX:0,heightY:0,isShowLight:false})
    }
}


configbuttonAnimate={
    duration:1500,
    create:{
type:'easeIn',
property:'opacity',
duration:1500,
springDamping:0.8
    },
    update:{
        type:'spring',
        property:'scaleXY',
        duration:1000,
        springDamping:0.8
    },
    delete:{
        type: "linear",
      duration: 1500,
      delay: 100,
    //   initialVelocity:-10,

      // springDamping: 0.3,
      property: "scaleXY"
    }
}
  render() {
    return (
      <View style={styles.container}>
      
        <View style={styles.lightBulb}>
        {this.state.isShowLight && <View style={{borderRadius:300,width:320,height:320,position:'absolute',top:175,right:238,zIndex: 1,backgroundColor:'gold'}}></View>}
          <Image source={require("../Assets/Images/lightBulb.png")} style={{zIndex: -1,}} />
          
        </View>
        <View style={styles.turnOnButton}>
        <TouchableHighlight underlayColor='white' onPress={this.toggler} style={{justifyContent: 'center',width:100,height:54,borderRadius:50,backgroundColor:this.state.toggle?'lime':'white',borderColor:'rgba(50,50,50,0.5)',borderWidth:3,elevation:5}}>
        <TouchableHighlight underlayColor='navy' onPress={this.toggler} style={{borderWidth:2,borderColor:'#777',marginLeft:this.state.marginL,width:50,height:50,borderRadius:50,backgroundColor:this.state.toggle?'white':'navy',elevation:5}}>
        <Text></Text>
        </TouchableHighlight>
        </TouchableHighlight>
        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
    backgroundColor: "purple",
    flexDirection: "column",
    elevation:10,
    justifyContent: 'center',
  },
  lightBulb: {
    flex: 3,
    backgroundColor: "royalblue",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  turnOnButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
