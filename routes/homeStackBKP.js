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
	HomeScreen: {
		screen: Home,
	},
};
const homeStack = createStackNavigator(
	screens,
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "white",
				borderBottomColor: "white",
			},
			headerTintColor: "#111",
			headerTitleStyle: {
				textAlign: "center",
				fontWeight: "bold",
				marginTop: 20,
				fontSize: 20,
			},
		},
	},
	{ initialRouteName: "SignUpScreen" }
);

export default createAppContainer(homeStack);
