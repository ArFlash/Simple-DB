import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

const MiniCard = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`
        }}
        style={styles.thumbnail}
      />
      <View style={styles.boxA}>
        <Text
          style={{
            fontSize: 17,
            width: Dimensions.get("screen").width / 2,
            color: "#eeeeee"
          }}
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          {props.title}
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "#eeeeee",
            width: Dimensions.get("screen").width / 2.5
          }}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {props.channel}
        </Text>
      </View>
    </View>
  );
};

export default MiniCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 2
  },
  thumbnail: {
    width: 130,
    height: 70,
    borderRadius: 10
  },
  boxA: {
    margin: 2,
    marginLeft: 10
  }
});
