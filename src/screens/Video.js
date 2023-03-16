import * as React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import Header from "../components/Header";
import { WebView } from "react-native-webview";

export default function App({ route }) {
  const { videoId, title, channel } = route.params;
  const video = React.useRef(null);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.video}>
        <WebView
          ref={video}
          source={{
            uri: `http://www.youtube.com/embed/${videoId}`
          }}
        />
      </View>
      <View style={styles.textBox}>
        <Text
          style={{
            fontSize: 15,
            color: "#eeeeee",
            width: Dimensions.get("screen").width - 10,
            height: 20
          }}
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          {title}
        </Text>
        <Text style={{ fontSize: 13, color: "#eeeeee" }}>{channel}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#393E46"
  },
  video: {
    width: "100%",
    height: 210
  },
  textBox: {
    margin: 10
  }
});
