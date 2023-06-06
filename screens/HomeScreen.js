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

const HomeScreen = () => {
	const screenWidth = Dimensions.get("window").width;
	const [posts, setPost] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`${BACKEND_URL}/api/v1/user/all-post`)
			.then((response) => {
				setPost(response.data.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<ScrollView>
			<Header />
			<View>
				{loading ? (
					<SpinnerComponent />
				) : (
					<View>
						<Post posts={posts} />
					</View>
				)}
			</View>
		</ScrollView>
	);
};

export default HomeScreen;
