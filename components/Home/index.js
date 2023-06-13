import React, { Component } from "react";
import { View, Text ,StyleSheet} from "react-native";
// import styles from "./style";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import UserScreen from "../../screens/UserScreen";
import ChatScreen from "../../screens/ChatScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import ImageUpload from "../../Components/ImageUpload";
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 



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
						color={tabInfo.focused ? "#1F45FC" : tabInfo.tintColor}
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
						color={tabInfo.focused ? "#1F45FC" : tabInfo.tintColor}
					/>
				),
			},
		},
		Upload: {
			screen: ImageUpload,
			navigationOptions: {
				tabBarLabel: "Add",
				tabBarIcon: (tabInfo) => (
					<Entypo name="circle-with-plus" style={styles.plusBtn} size={tabInfo.focused ? 26 : 20}
					color={tabInfo.focused ? "#1F45FC" : tabInfo.tintColor}/>
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
						color={tabInfo.focused ? "#1F45FC" : tabInfo.tintColor}
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
						color={tabInfo.focused ? "#1F45FC" : tabInfo.tintColor}
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "blue",
		padding: 4,
	},
	text: {
		color: "white",
		fontSize: 18,
		fontSize: 25,
		fontWeight: "bold",
	},
	plusBtn:{
		fontSize:50,
		color:"blue",
		top:-22,
		position:"relative"
	}
});
