import React from "react";
import {
  View,
  Text,
  Modal,
  Image,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const PlaceDetails = props => {
  let modalContent = null;
  let modalVisible = false;

  if (props.selectedPlace) {
    modalVisible = true;
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => {
          props.onModalClosed();
        }}>
        <View style={styles.modalContainer}>
          {modalContent}
          <View style={styles.buttonStyle}>
            <TouchableOpacity onPress={props.placeDeletedHandler}>
              <Icon size={30} name="ios-trash" color="red" />
            </TouchableOpacity>
            <Button title="Close" onPress={props.onModalClosed} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 25
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  buttonStyle: {
    marginTop: 10,
    alignItems: "center"
  }
});

export default PlaceDetails;
