import { Text, View, StyleSheet, Image } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../assets/Flash.png")}
          alt="Logo"
          style={{ width: 30, height: 35 }}
        />
        <Text style={styles.title}>Flash Tube</Text>
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
          onPress={() => navigation.navigate("Search")}
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
