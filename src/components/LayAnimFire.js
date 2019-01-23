import React, { Component } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  LayoutAnimation,
  Dimensions,
  TextInput,
  UIManager
} from "react-native";

import LayAnimGallery from "./LayAnimGallery";

// const { UIManager } = useNativeModules;

//  const deviceWidth = Dimenssion.get('window').width
let deviceX = Dimensions.get("window").width;
export default class LayAnimFire extends Component {
  constructor(props) {
    super(props);

    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);

    this.state = {
      widthX: 0,
      isShowProgress: true
    };
  }
  layanimeconfig = {
    duration: 1000,
    create: {
      type: "linear",
      duration: 1000,
      delay: 500,
      // initialVelocity:20,
      // springDamping: 0.3,
      property: "scaleXY"
    },
    update: {
      type: "spring",
      duration: 1000,
      delay: 100,
      // initialVelocity:100,

      springDamping: 0.8,
      property: "scaleX"
    },
    delete: {
      type: "easeOut",
      duration: 1500,
      delay: 100,
      // initialVelocity:1,

      // springDamping: 0.3,
      property: "opacity"
    }
  };

  makeitRain = input => {
    let rand = Math.floor(Math.random() * (deviceX - 150)) + 150;

    LayoutAnimation.configureNext(this.layanimeconfig);
    if (input > 0) {
      this.setState({ isShowProgress:true,widthX: deviceX * (input / 100) -50});
    } else if (input === "r") {
      this.setState({ isShowProgress:true,widthX: rand });
    } else {
      this.setState({ isShowProgress: false });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Wrapper}>
          <View style={styles.progressParent}>
            {this.state.isShowProgress && <View
              // onPress={this.makeitRain}
              // underlayColor="rgba(75,75,75,0.8)"
              style={[
                styles.progressBar,
                {
                  width: this.state.widthX,
                  backgroundColor:
                    // this.state.widthX >deviceX * (45/ 100)-50 && this.state.widthX < deviceX * (55/ 100)-50
                    //   ? "gold"
                    //   ? this.state.widthX < deviceX * (45 / 100)
                    //   : "rgba(255,100,100,1.0)"
                    //   : this.state.widthX > deviceX * (55 / 100) ? "lime":"rgba(255,100,100,1.0)"

                    (this.state.widthX < deviceX * (45/ 100)-50 ) ?"rgba(255,100,100,1.0)": (this.state.widthX > deviceX * (45/ 100)-50 && this.state.widthX < deviceX * (65/ 100)-50 ) ?'gold':'lime' 
                }
              ]}
            >
              <Text />
            </View>}
          </View>
          <View style={styles.buttonsWrapper}>
            <TouchableHighlight
              onPress={() => this.makeitRain(50)}
              underlayColor="rgba(75,75,75,0.8)"
              style={styles.buttonStyles}
            >
              <Text style={styles.ButtonTxt}>50%</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => this.makeitRain(100)}
              underlayColor="rgba(75,75,75,0.8)"
              style={styles.buttonStyles}
            >
              <Text style={styles.ButtonTxt}>100%</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => this.makeitRain("r")}
              underlayColor="rgba(75,75,75,0.8)"
              style={styles.buttonStyles}
            >
              <Text style={styles.ButtonTxt}>Random</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => this.makeitRain(25)}
              underlayColor="rgba(75,75,75,0.8)"
              style={styles.buttonStyles}
            >
              <Text style={styles.ButtonTxt}>25%</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => this.makeitRain(0)}
              underlayColor="rgba(75,75,75,0.8)"
              style={styles.buttonStyles}
            >
              <Text style={styles.ButtonTxt}>reset Bar</Text>
            </TouchableHighlight>
          </View>
        </View>
        <LayAnimGallery />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    borderWidth: 5,
    justifyContent: "center"
  },
  Wrapper: {
    flex: 1,
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center"
    // flexDirection: 'row',
  },
  progressParent: {
    height: 25,
    backgroundColor: "rgba(100,100,255,0.5)",
    borderRadius: 50,
    justifyContent: "center",
    width: deviceX - 50
  },
  progressBar: {
    backgroundColor: "#77f",
    // width:300,
    borderRadius: 50
  },
  buttonStyles: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#33c",
    backgroundColor: "#99f",
    // alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10
  },
  buttonsWrapper: {
    flexDirection: "row"
  },
  ButtonTxt: {
    color: "#333",
    fontWeight: "800"
  }
});
