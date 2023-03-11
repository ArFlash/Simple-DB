import { StyleSheet, StatusBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/Home";
import VideoPlayer from "./src/screens/Video";
import Explore from "./src/screens/Explore";
import Subscribe from "./src/screens/Subscribe";
import SearchScreen from "./src/screens/Search";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "explore";
          } else if (route.name === "Explore") {
            iconName = "explore";
          } else if (route.name === "Subscribe") {
            iconName = "explore";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray"
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Explore" component={Explore} />
      <Tabs.Screen name="Subscribe" component={Subscribe} />
    </Tabs.Navigator>
  );
};
export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        initialRouteName="rootHome"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="rootHome" component={Home} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="videoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
