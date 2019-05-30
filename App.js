import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";

import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceDetails from "./src/components/PlaceDetail/PlaceDetails";

import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "./src/store/actions/index";

// import placeImage from "./src/assets/place.jpeg";

class App extends React.Component {
  placeAddedHandler = (placeName, placeImage) => {
    this.props.onAddPlace(placeName, placeImage);
  };

  placeSelectedHandler = key => {
    console.log(this.props);
    console.log(this.props.places.name);
    this.props.onSelectPlace(key);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  onModalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetails
          selectedPlace={this.props.selectedPlace}
          onModalClosed={this.onModalClosedHandler}
          placeDeletedHandler={this.placeDeletedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },

  listContainer: {
    width: "100%"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name, image) => dispatch(addPlace(name, image)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
