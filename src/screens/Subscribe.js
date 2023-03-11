import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";

const Subscribe = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>This is Subscribe Screen</Text>
    </View>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
