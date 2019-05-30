import React from "react";
import {
  View,
  Text,
  Modal,
  Image,
  Button,
  StyleSheet,
  Alert
} from "react-native";

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
            <View style={{ paddingBottom: 5 }}>
              <Button title="Delete" onPress={props.placeDeletedHandler} />
            </View>
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
    marginTop: 5
  }
});

export default PlaceDetails;
