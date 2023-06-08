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
import Card from "../Components/Card";
const screenWidth = Dimensions.get("window").width;
const ProfileScreen = () => {
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
			<View style={styles.container}>
				<Image
					style={styles.coverImage}
					source={{
						uri: "https://static.vecteezy.com/system/resources/thumbnails/001/434/991/small/pink-and-blue-blurred-colorful-texture-vector.jpg",
					}}
				/>
				<Image
					style={{
						width: 140,
						height: 140,
						borderRadius: 75,
						display: "flex",
						justifyContent: "center",
						alignContent: "center",
						top: -50,
						position: "relative",
						borderWidth: 5,
						borderColor: "white",
					}}
					source={{
						uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxUOMCGqeaHpA9gD_0avsOdEsNIsT0dquZA&usqp=CAU",
					}}
				/>
				<View style={styles.userData}>
					<Text style={styles.bold}>Virat Kohli</Text>
					<Text style={styles.center}>Cricketer</Text>
				</View>
				<View style={styles.followActions}>
					<Text style={styles.semibold}>563</Text>
					<Text style={styles.semibold}>256M</Text>
					<Text style={styles.semibold}>11</Text>
				</View>
				<View style={styles.followAction}>
					<Text style={styles.semibold}>Post</Text>
					<Text style={styles.semibold}>Followers</Text>
					<Text style={styles.semibold}>Following</Text>
				</View>
			</View>

			<View>
				{/* {loading ? (
					<SpinnerComponent />
				) : (
					<View>
						<Post posts={posts} />
					</View>
				)} */}
				<Card />
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
		borderBottomLeftRadius: 80,
		borderBottomRightRadius: 80,
		shadowColor: "#EDEDED",
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.5,
		shadowRadius: 4,
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
	userData: {
		marginTop: -40,
		marginBottom: 40,
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
		fontFamily: "Arial",
	},
	center: {
		fontWeight: 500,
		fontSize: 15,
		fontFamily: "Arial",
		display: "flex",
		justifyContent: "center",
	},
	semibold: {
		fontWeight: 500,
		fontSize: 15,
		margin: 30,
	},
	followActions: {
		display: "flex",
		flex: 2,
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: -20,
		backgroundColor: "white",
		padding: 8,
	},
	followAction: {
		display: "flex",
		flex: 2,
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: -40,
		backgroundColor: "white",
		padding: 5,
		borderBottomLeftRadius: 80,
		borderBottomRightRadius: 80,
	},
	line: {
		borderBottomColor: "black",
		borderBottomWidth: 1,
		marginVertical: 10,
	},
	coverImage: {
		width: screenWidth,
		height: 200,
		borderBottomLeftRadius: 80,
		borderBottomRightRadius: 80,
	},
});
