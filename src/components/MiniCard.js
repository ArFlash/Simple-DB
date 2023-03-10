import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import React from "react";

const MiniCard = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image source={require("../doremon.jpeg")} />
      <View>
        <Text
          style={{ fontSize: 15, width: Dimensions.get("screen").width / 2 }}
          ellipsizeMode="tail"
          numberOfLines={3}
        >
          This is Demo
        </Text>
        <Text style={{ fontSize: 12 }}>This is Demo Title</Text>
      </View>
    </View>
  );
};

export default MiniCard;
