import { TextInput, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import MiniCard from "../components/MiniCard";

const SearchScreen = () => {
  const [Value, setValue] = useState("");
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
        <MaterialIcons name="send" size={30} color="#eeeeee" />
      </View>
      <MiniCard />
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
