import { StyleSheet, Text, View, StatusBar } from "react-native";
import HomeScreen from "./src/screens/Home";
import SearchScreen from "./src/screens/Search";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      {/* <HomeScreen /> */}
      <SearchScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
