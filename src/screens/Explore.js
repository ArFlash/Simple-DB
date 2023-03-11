import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";

const Explore = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>This is Explore Screen</Text>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
