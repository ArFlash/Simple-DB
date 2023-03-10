import { Text, View, StyleSheet } from "react-native";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Entypo
          name="youtube"
          size={28}
          color="red"
          style={{ marginLeft: 5 }}
        />
        <Text style={styles.title}>You Tube</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <MaterialIcons
          name="search"
          size={28}
          style={{ marginHorizontal: 5 }}
          color="#eeeeee"
        />
        <MaterialCommunityIcons
          name="account"
          size={28}
          style={{ marginHorizontal: 5 }}
          color="#eeeeee"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222831",
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 4,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0
  },
  title: {
    color: "#eeeeee",
    fontSize: 15,
    marginLeft: 5
  }
});
