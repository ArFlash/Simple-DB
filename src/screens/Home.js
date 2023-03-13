import { View, FlatList } from "react-native";
import { useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../store/dataSlice";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const Data = useSelector((state) => {
    return state.data;
  });

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=top10video&type=video&key=AIzaSyDJ2Aokb-PrmRzbUHZHLdRksXAWV9Zwx-o`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(add(data.items));
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <FlatList
        data={Data}
        renderItem={({ item }) => {
          return (
            <Card
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
}
