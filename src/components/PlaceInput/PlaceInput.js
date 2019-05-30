import React, { Component } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";

const placeImage = {
  uri:
    "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
};

export default class PlaceInput extends Component {
  state = {
    placeName: "",
    placeImage: placeImage
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="Your Awesome place"
          value={this.state.placeName}
          onChangeText={placeName => this.setState({ placeName })}
        />
        <Button
          style={styles.placeButton}
          title="Add"
          onPress={() =>
            this.props.onPlaceAdded(this.state.placeName, this.state.placeImage)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
