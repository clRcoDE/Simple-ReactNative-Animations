import React, { Component } from 'react';
import { View, Text ,StyleSheet , Image ,Animated,Easing} from 'react-native';

export default class Loading extends Component {
  constructor(props) {
    super(props);

    // this.loadOpacity = new Animated.Value(1)
    this.loadSpin = new Animated.Value(0)



    // this.state = {
        
    // };
  }


  fadeAnimation(){


    this.loadOpacity.setValue(0),

    Animated.sequence([Animated.timing(this.loadOpacity,{
        toValue:1,
        duration:7500,

    }).start(()=>this.fadeAnimation())

])
    
  }


  spinAnimation(){


    // this.loadSpin.setValue(0);
    // Animated.sequence([
    //     Animated.timing(
    //         this.loadSpin,{
    //             toValue:0,
    //             duration:500
    //         }
    //     ),Animated.timing(
    //         this.loadSpin,{
    //             toValue:360,
    //             duration:500
    //         }
    //     )
    // ])


    // this.loadSpin.setValue(0),

    Animated.loop(
        Animated.sequence([
            Animated.timing(this.loadSpin,{
            toValue:1,
            delay: 0,
            easing: Easing.linear,
            duration:2000}),
            Animated.timing(this.loadSpin,{
                toValue:2,
                easing: Easing.linear,
                delay: 0,
                duration:2000})
        ])
    ).start();

    // Animated.timing(this.loadSpin,{
    //     toValue:1,
    //     duration:2000,

    // }).start(()=>this.spinAnimation())


  }




//   fadeIn(){
//     // this.loadOpacity.setValue(0),
//     Animated.timing(this.loadOpacity,{
//         toValue:1,
//         duration:1000
//     }).start(()=>this.fadeOut())
//   }

//   fadeOut(){
//     // this.loadOpacity.setValue(0),
//     Animated.timing(this.loadOpacity,{
//         toValue:0,
//         duration:1000
//     }).start(()=>this.fadeIn())
//   }
//   spinThat(){
//       this.degree.setValue(0)
//       Animated.timing(this.degree,{
//           toValue:360,
//           duration:1500
//       }).start(()=>this.spinThat())
//   }

componentDidMount(){
    // this.fadeAnimation()
// this.loadSpin();
    // this.spinThat()
this.spinAnimation();
    // this.fadeIn()
            }


  render() {
      const spin = this.loadSpin.interpolate({ 
          inputRange:[0,1] ,
          outputRange:['0deg','360deg']
        })
    return (
      <View style={styles.container}>
      <View style={[styles.textWrapper]}>
      <Animated.Text style={{opacity:1,fontSize:30,fontWeight: '100',color:'#555'}}>Hello World </Animated.Text>
      </View>
        <Animated.View style={[styles.loadingWrapper,]}>
        <Animated.Image source={require('../Assets/Images/loading.png')} style={{transform:[{rotate:spin}]}} />
        <Animated.Image source={require('../Assets/Images/loading1.png')} style={{transform:[{rotate:spin}]}}/>
        <Animated.Image source={require('../Assets/Images/loading2.png')} style={{transform:[{rotate:spin}]}}/>
        
        </Animated.View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        margin:50,
        elevation:20,
        justifyContent: 'center',
        alignItems:'center'
    },
    loadingWrapper:{
    flexDirection: 'row',
    },
    textWrapper:{
        height:200,
        elevation:10,
        width:400,
        backgroundColor:"white",
        justifyContent: 'center',
        alignItems: 'center',
        margin:25
    }
});
