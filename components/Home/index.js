import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import UserScreen from "../../screens/UserScreen";
import ChatScreen from "../../screens/ChatScreen";
import ProfileScreen from "../../screens/ProfileScreen";

const TabNavigator = createMaterialBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarLabel: "Home",
				tabBarIcon: (tabInfo) => (
					<Ionicons
						name="md-home"
						size={tabInfo.focused ? 26 : 20}
						color={tabInfo.focused ? "#00F3D2" : tabInfo.tintColor}
					/>
				),
			},
		},
		User: {
			screen: UserScreen,
			navigationOptions: {
				tabBarLabel: "User",
				tabBarIcon: (tabInfo) => (
					<Ionicons
						name="person-add-outline"
						size={tabInfo.focused ? 26 : 20}
						color={tabInfo.focused ? "#00F3D2" : tabInfo.tintColor}
					/>
				),
			},
		},
		Chat: {
			screen: ChatScreen,
			navigationOptions: {
				tabBarLabel: "Chat",
				tabBarIcon: (tabInfo) => (
					<Ionicons
						name="chatbox-outline"
						size={tabInfo.focused ? 26 : 20}
						color={tabInfo.focused ? "#00F3D2" : tabInfo.tintColor}
					/>
				),
			},
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions: {
				tabBarLabel: "Profile",
				tabBarIcon: (tabInfo) => (
					<Ionicons
						name="md-person-circle-outline"
						size={tabInfo.focused ? 26 : 20}
						color={tabInfo.focused ? "#00F3D2" : tabInfo.tintColor}
					/>
				),
			},
		},
	},
	{
		initialRouteName: "Home",
		barStyle: { backgroundColor: "white", padding: 10 },
	}
);

const Navigator = createAppContainer(TabNavigator);

export default function Home() {
	return (
		<Navigator>
			<HomeScreen />
		</Navigator>
	);
}
