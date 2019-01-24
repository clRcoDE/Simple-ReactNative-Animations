import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  UIManager,
  LayoutAnimation,
  TouchableHighlight
} from "react-native";

export default class LayMyMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsMenuOpened: false,
      toggleMenu: false,
      widthElement: 196,
      heightElement: 60,
      heightX:0
    };
  }
  configfile = {
    duration: 1000,
    create:{
      type: "easeIn",
      property: "scaleXY",
    //   springDamping: 0.2,
      duration: 500
    },
    update: {
      type: "easeOut",
      property: "scaleXY",
    //   springDamping: 0.2,
      duration: 500
    },
    
    delete:{
        type:'easeIn',
        // springDamping:0.5,
        property:'scaleXY',
        duration:200
    }


  };

  openUp = () => {
    LayoutAnimation.configureNext(this.configmenuUp);
    // this.setState({})
    this.setState(prev => ({ IsMenuOpened: !prev.IsMenuOpened }));
  };

  openMenu = () => {
    LayoutAnimation.configureNext(this.configfile);

    this.setState(prev => ({ toggleMenu: !prev.toggleMenu ,  }));
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.packetWrapper}>
        {this.state.toggleMenu && <View style={[styles.menuParent]}>
        <View><Text>Trends</Text></View>
        <View><Text>Bio</Text></View>
        <View><Text>About</Text></View>
        <View><Text>Wroks</Text></View>
        </View>}
          <TouchableHighlight
            underlayColor="#ccc"
            onPress={this.openMenu}
            style={
              this.state.toggleMenu
                ? styles.menuButtonOpened
                : styles.menuButtonClose
            }
          >
            {this.state.toggleMenu ? (
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 20,
                  letterSpacing: 10,
                  color: "#555"
                }}
              >
                MENU
              </Text>
            ) : (
              <Text style={{ fontSize: 26 }}>&#9776;</Text>
            )}
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "royalblue",
    justifyContent: "flex-end",
    margin: 50
  },
  packetWrapper: {
    borderWidth: 8,

    alignItems: "center",
    // bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButtonClose: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    elevation: 10,
    backgroundColor: "#fff",
    position: 'absolute',
    zIndex: 10,
  },
  menuButtonOpened: {
    justifyContent: "center",
    width: 200,
    height: 60,
    borderRadius: 50,
    elevation: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#888",
    position: 'absolute',
    zIndex: 10,


  },
  menuParent:{
    height:300,
      width:196,
      backgroundColor:'#fff',
      position: 'absolute',
      zIndex:-1,
      bottom:0,
      justifyContent: 'space-evenly',
    //   paddingBottom:1,
      alignItems: 'center',


  }
});
