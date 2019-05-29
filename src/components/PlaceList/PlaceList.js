import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const PlaceList = props => {
  // console.log(props.places);
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={({ item }) => (
        <ListItem
          placeName={item.name}
          placeImage={item.image}
          onItemPressed={() => props.onItemSelected(item.key)}
        />
      )}
    />
  );
  // return <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;
