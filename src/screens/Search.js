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
import { useNavigation } from "@react-navigation/native";
import { add } from "../store/dataSlice";
import { useDispatch } from "react-redux";

const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [Value, setValue] = useState("");
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${Value}&type=video&key=AIzaSyDoC1G19_Ow0_G8XsgYMj0y4LYb4Jd7Xxk`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data.items);
        dispatch(add(data.items));
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxA}>
        <MaterialIcons
          name="keyboard-backspace"
          size={30}
          color="#eeeeee"
          onPress={() => navigation.goBack()}
        />
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
        renderItem={({ item }) => {
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
