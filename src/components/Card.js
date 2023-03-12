import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Card = () => {
  const Data = useSelector((state) => {
    state.Data;
  });
  return (
    <View style={styles.container}>
      <Image source={require("../doremon.jpeg")} style={styles.thumbnail} />
      <View style={styles.boxA}>
        <MaterialCommunityIcons
          name="account-circle"
          size={35}
          color="#eeeeee"
          onPress={() => {
            console.warn(Data);
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{
              fontSize: 15,
              color: "#eeeeee",
              width: Dimensions.get("screen").width - 50
            }}
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            This is an Demo title and this is only for this tutorial
          </Text>
          <Text style={{ fontSize: 13, color: "#eeeeee" }}>Demo Channel</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#393E46",
    paddingBottom: 10
  },
  boxA: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5
  },
  thumbnail: {
    width: "100%",
    height: 200
  }
});
