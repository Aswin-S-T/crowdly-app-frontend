import {
	View,
	Text,
	Image,
	StyleSheet,
	Button,
	Dimensions,
	ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Post from "../Components/Post";
import SpinnerComponent from "../Components/SpinnerComponent";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { BACKEND_URL } from "../constants/api";
import Card from "../Components/Card";

const HomeScreen = () => {
	const screenWidth = Dimensions.get("window").width;

	return (
		<ScrollView>
			<Header />
			{/* <View>
				{loading ? (
					<SpinnerComponent />
				) : (
					<View>
						<Post posts={posts} />
					</View>
				)}
			</View> */}
			<View style={{ backgroundColor: "#F0FBF9" }}>
				<View>
					<Card />
				</View>
			</View>
		</ScrollView>
	);
};

export default HomeScreen;
