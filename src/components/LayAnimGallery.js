import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableHighlight,
  UIManager,
  LayoutAnimation
} from "react-native";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

let accessID =
  "c2762cba9947259cd987a5fc53bf0388ac586afa8d564e6c09bbff2d7a30d45e";

export default class LayAnimGallery extends Component {
  constructor(props) {
    super(props);
    this.state = { widthX: 350, heightY: 350, selectedItem: null ,isShowLight:false };
  }

  // componentDidMount() {
  //   fetch(`https://api.unsplash.com/photos/?client_id=${accessID}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ imgs: data });
  //     })
  //     .catch(err => {
  //       console.log("Error happened during fetching!", err);
  //     })

  configurefile = {
    duration: 1000,
    create: {
      type: "easeOut",
      // springDamping: 0.4,

      duration: 1000,
      property: "opacity"
    },
    update: {
      type: "easeOut",
      // springDamping: 0.4,
      property: "opacity",
      duration: 1000
    },
    delete: {
      type: "spring",
      springDamping: 0.4,
      duration: 1000,
      property: "opacity",
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flatlistWrapper}>
          <FlatList
            data={[
              { txt: "AAAAA", key: 11 },
              { txt: "BBBBB", key: 22 },
              { txt: "CCCCCC", key: 33 },
              { txt: "DDDDDD", key: 44 },
              { txt: "EEEEEE", key: 55 },
              { txt: "FFFFFFF", key: 66 },
              { txt: "GGGGGG", key: 77 },
              { txt: "HHHHHH", key: 88 },
              { txt: "IIIIII", key: 99 },

              { txt: "JJJJJJ", key: 111 },

              { txt: "KKKKKK", key: 222 },

              { txt: "LLLLLL", key: 333 },
              { txt: "MMMMMMM", key: 444 },
              { txt: "NNNNNNN", key: 555 },

            ]}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            extraData={this.state.selectedItem}
            keyExtractor={item=> item.key}
            renderItem={({ item }) => {
              return (
                <TouchableHighlight
                  underlayColor="#888"
                  onPress={() => {LayoutAnimation.configureNext(this.configurefile),this.setState({selectedItem:item.key})}}
                  style={this.state.selectedItem===item.key?{
                    width: this.state.widthX,
                    height: this.state.heightY,
                    backgroundColor: "#77f",
                    margin: 7,
                    borderRadius: 250,
                    elevation: 10,
                    justifyContent: "center",
                    alignItems: "center"
                  }: {width: 300,
                  height: 300,
                  backgroundColor: "#aaa",
                  margin:20 ,
                  borderRadius: 10,
                  elevation: 10,
                  justifyContent: "center",
                  alignItems: "center"}}
                >
                  <Text>{item.txt}{item.key}</Text>
                  
                </TouchableHighlight>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "royalblue"
  },
  flatlistWrapper: {
    alignItems: "center"
  }
});
