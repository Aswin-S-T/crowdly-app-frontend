import {
	View,
	Text,
	ScrollView,
	Image,
	StyleSheet,
	Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header";
import SpinnerComponent from "../Components/SpinnerComponent";
import Post from "../Components/Post";
import { BACKEND_URL } from "../constants/api";

const ProfileScreen = () => {
	const [posts, setPost] = useState([]);
	const [loading, setLoading] = useState(true);
	const screenWidth = Dimensions.get("window").width;

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
			<View style={styles.container}>
				<Image
					style={{ width: screenWidth, height: 200 }}
					source={{
						uri: "https://iso.500px.com/wp-content/uploads/2016/10/stock-photo-159358357.jpg",
					}}
				/>
				<Image
					style={{
						width: 100,
						height: 100,
						borderRadius: 50,
						display: "flex",
						justifyContent: "center",
						alignContent: "center",
						top: -50,
						position: "relative",
					}}
					source={{
						uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxUOMCGqeaHpA9gD_0avsOdEsNIsT0dquZA&usqp=CAU",
					}}
				/>
				<View>
					<Text style={styles.bold}>Virat Kohli</Text>
					<Text>Cricketer</Text>
				</View>
			</View>
			<View style={styles.followActions}>
				<Text style={styles.semibold}>563 Posts</Text>
				<Text style={styles.semibold}>256M Followers</Text>
				<Text style={styles.semibold}>11 Following</Text>
			</View>
			<View style={styles.line} />
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

export default ProfileScreen;
const styles = StyleSheet.create({
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
	text: {
		color: "blue",
		fontSize: 18,
		fontSize: 25,
		fontWeight: "bold",
	},
	thumb: {
		width: 40,
		height: 40,
		borderRadius: 50,
	},
	postHeader: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		flex: 1,
		backgroundColor: "white",
		padding: 15,
	},
	postImage: {
		marginTop: 10,
		fontSize: 20,
		fontWeight: 500,
	},
	followBtn: {
		backgroundColor: "blue",
		borderRadius: 10,
	},
	postImage: {
		width: 100,
	},
	postActions: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		flex: 1,
	},
	icons: {
		fontSize: 26,
	},
	line: {
		borderBottomColor: "black",
		borderBottomWidth: 1,
		marginVertical: 10,
	},
	bold: {
		fontWeight: 600,
		fontSize: 25,
	},
	semibold: {
		fontWeight: 400,
		fontSize: 15,
	},
	followActions: {
		display: "flex",
		flex: 2,
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 10,
		backgroundColor: "white",
		padding: 8,
	},
	line: {
		borderBottomColor: "black",
		borderBottomWidth: 1,
		marginVertical: 10,
	},
});
