import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Home from "../components/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";

const screens = {
  Login: {
    screen: SignIn,
  },
  SignUpScreen: {
    screen: SignUp,
  },
  Crowdly: {
    screen: Home,
  },
};

const homeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "white",
      borderBottomColor: "white",
      padding: 25,
    },
    headerTintColor: "#FE2E9A",
    headerTitleStyle: {
      display: "flex",
      justifyContent: "flex-start",
      fontWeight: "bold",
      marginTop: 20,
      fontSize: 25,
    },
  },
  initialRouteName: "Crowdly", // Set initial route name to "Login" by default
});

AsyncStorage.getItem("isLoggedIn").then((isLoggedIn) => {
  const initialRouteName = isLoggedIn === "true" ? "Crowdly" : "Login";
  homeStack.navigationOptions = { initialRouteName }; // Update the initialRouteName
});

export default createAppContainer(homeStack);
