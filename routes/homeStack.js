import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Home from "../components/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";

const screens = {
	// Login: {
	// 	screen: SignIn,
	// },
	// SignUpScreen: {
	// 	screen: SignUp,
	// },
	Crowdly: {
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
			headerTintColor: "blue",
			headerTitleStyle: {
				textAlign: "center",
				fontWeight: "bold",
				marginTop: 20,
				fontSize: 20,
			},
		},
	},
	{ initialRouteName: "Crowdly" }
);

// const homeStack = createStackNavigator(
// 	{
// 		HomeScreen: {
// 			screen: Home,
// 			navigationOptions: {
// 				// Custom options specific to Home screen
// 				headerShown: false,
// 			},
// 		},
// 		Login: {
// 			screen: SignIn,
// 			navigationOptions: {
// 				// Custom options specific to Home screen
// 				headerShown: false,
// 			},
// 		},
// 	},
// 	{ initialRouteName: "SignIn" }
// );

AsyncStorage.getItem("isLoggedIn").then((isLoggedIn) => {
	console.log("LOGEDIN-------------------------", isLoggedIn == "true");
	const initialRouteNames = isLoggedIn == "true" ? "HomeScreen" : "Login";
	homeStack.initialRouteName = {
		initialRouteNames,
	};
});

export default createAppContainer(homeStack);
