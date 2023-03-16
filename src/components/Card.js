import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Button
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Card = (props) => {
  const navigation = useNavigation();
  const [Videodata, setVideodata] = useState([]);
  const VideoData = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${props.videoId}&key=AIzaSyDJ2Aokb-PrmRzbUHZHLdRksXAWV9Zwx-o`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideodata(data.items[0].statistics);
      });
  };
  useEffect(() => {
    VideoData();
  }, []);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("videoPlayer", {
          videoId: props.videoId,
          title: props.title,
          channel: props.channel
        })
      }
    >
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
            <Text style={{ fontSize: 13, color: "#eeeeee", marginVertical: 1 }}>
              {props.channel}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 2
              }}
            >
              <Text style={{ marginHorizontal: 2 }}>
                <EvilIcons name="like" size={20} color="#eeeeee" />
              </Text>
              <Text style={{ color: "#eeeeee", marginRight: 20 }}>
                {Videodata.likeCount ? Videodata.likeCount : "0"}
              </Text>
              <Text style={{ marginHorizontal: 2 }}>
                <EvilIcons name="eye" size={20} color="#eeeeee" />
              </Text>
              <Text style={{ color: "#eeeeee", marginRight: 20 }}>
                {Videodata.viewCount}
              </Text>
            </View>
            <View></View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    marginVertical: 1,
    alignItems: "center"
  },
  thumbnail: {
    width: "100%",
    height: 200
  }
});
