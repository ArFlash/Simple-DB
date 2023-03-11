import { StyleSheet, Text, View } from "react-native";
import React from "react";

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <Text>This is VideoPlayer Screen</Text>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
