import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Card = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`
        }}
        style={styles.thumbnail}
      />
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
            {props.title}
          </Text>
          <Text style={{ fontSize: 13, color: "#eeeeee" }}>
            {props.channel}
          </Text>
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
