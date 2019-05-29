import React, { Component } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";

export default class PlaceInput extends Component {
  state = {
    placeName: ""
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
          onPress={() => this.props.onPlaceAdded(this.state.placeName)}
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
