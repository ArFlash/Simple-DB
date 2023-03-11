import {
  TextInput,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import MiniCard from "../components/MiniCard";

const SearchScreen = () => {
  const [Value, setValue] = useState("");
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${Value}&type=video&key=AIzaSyDJ2Aokb-PrmRzbUHZHLdRksXAWV9Zwx-o`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data.items);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxA}>
        <MaterialIcons name="search" size={30} color="#eeeeee" />
        <TextInput
          value={Value}
          onChangeText={(text) => setValue(text)}
          placeholder="Search"
          placeholderTextColor="#eeeeee"
          style={{
            backgroundColor: "#393E46",
            width: "70%",
            height: 35,
            borderRadius: 10,
            paddingHorizontal: 15,
            color: "#eeeeee"
          }}
        />
        <MaterialIcons
          name="send"
          size={30}
          color="#eeeeee"
          onPress={() => fetchData()}
        />
      </View>
      {Loading && <ActivityIndicator size="large" color="#eeeeee" />}
      <FlatList
        data={Data}
        renderItem={({ item, index }) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222831",
    flex: 1
  },
  boxA: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
