import { StatusBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/Home";
import VideoPlayer from "./src/screens/Video";
import About from "./src/screens/About";
import Subscribe from "./src/screens/Subscribe";
import SearchScreen from "./src/screens/Search";
import { Provider } from "react-redux";
import store from "./src/store/store";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "About") {
            iconName = "help-outline";
          } else if (route.name === "Subscribe") {
            iconName = "subscriptions";
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray"
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="About" component={About} />
      <Tabs.Screen name="Subscribe" component={Subscribe} />
    </Tabs.Navigator>
  );
};
export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
