import {
	View,
	Text,
	Image,
	StyleSheet,
	Button,
	Dimensions,
	ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Card = () => {
	const screenWidth = Dimensions.get("window").width;
	return (
		<View>
			<View style={styles.card}>
				<View style={styles.postHeader}>
					<Image
						style={styles.thumb}
						source={{
							uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
						}}
					/>
					<Text style={styles.username}>Username here</Text>
					<Button title="Follow+" style={styles.followBtn} />
				</View>
				<View>
					<Image
						style={{ width: screenWidth, height: 300, padding: 10 }}
						source={{
							uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
						}}
					/>
				</View>
				<View style={styles.postActions}>
					<AntDesign name="heart" size={23} color="red" />
					<FontAwesome5 name="comment-alt" size={23} color="black" />
					<Fontisto name="favorite" size={24} color="black" />
				</View>
				<View style={{ padding: 10 }}>
					<Text>0 Likes</Text>
					<Text>View all 10 comments</Text>
				</View>
			</View>
			<View style={styles.card}>
				<View style={styles.postHeader}>
					<Image
						style={styles.thumb}
						source={{
							uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
						}}
					/>
					<Text style={styles.username}>Username here</Text>
					<Button title="Follow+" style={styles.followBtn} />
				</View>
				<View>
					<Image
						style={{ width: screenWidth, height: 300, padding: 10 }}
						source={{
							uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
						}}
					/>
				</View>
				<View style={styles.postActions}>
					<AntDesign name="heart" size={23} color="red" />
					<FontAwesome5 name="comment-alt" size={23} color="black" />
					<Fontisto name="favorite" size={24} color="black" />
				</View>
				<View style={{ padding: 10 }}>
					<Text>0 Likes</Text>
					<Text>View all 10 comments</Text>
				</View>
			</View>
			<View style={styles.card}>
				<View style={styles.postHeader}>
					<Image
						style={styles.thumb}
						source={{
							uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
						}}
					/>
					<Text style={styles.username}>Username here</Text>
					<Button title="Follow+" style={styles.followBtn} />
				</View>
				<View>
					<Image
						style={{ width: screenWidth, height: 300, padding: 10 }}
						source={{
							uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
						}}
					/>
				</View>
				<View style={styles.postActions}>
					<AntDesign name="heart" size={23} color="red" />
					<FontAwesome5 name="comment-alt" size={23} color="black" />
					<Fontisto name="favorite" size={24} color="black" />
				</View>
				<View style={{ padding: 10 }}>
					<Text>0 Likes</Text>
					<Text>View all 10 comments</Text>
				</View>
			</View>
			<View style={styles.card}>
				<View style={styles.postHeader}>
					<Image
						style={styles.thumb}
						source={{
							uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
						}}
					/>
					<Text style={styles.username}>Username here</Text>
					<Button title="Follow+" style={styles.followBtn} />
				</View>
				<View>
					<Image
						style={{ width: screenWidth, height: 300, padding: 10 }}
						source={{
							uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
						}}
					/>
				</View>
				<View style={styles.postActions}>
					<AntDesign name="heart" size={23} color="red" />
					<FontAwesome5 name="comment-alt" size={23} color="black" />
					<Fontisto name="favorite" size={24} color="black" />
				</View>
				<View style={{ padding: 10 }}>
					<Text>0 Likes</Text>
					<Text>View all 10 comments</Text>
				</View>
			</View>
		</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",
		marginTop: 10,
	},
	container: {
		flex: 1,
		backgroundColor: "white",
		padding: 15,
	},
	thumb: {
		height: 40,
		width: 40,
		borderRadius: 50,
	},
	username: {
		color: "#111",
		fontSize: 15,
		marginTop: 5,
	},
	followBtn: {
		backgroundColor: "#1F45FC",
		color: "white",
		padding: 5,
		borderRadius: 5,
		width: 50,
	},
	postHeader: {
		display: "flex",
		flex: 1,
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	postActions: {
		display: "flex",
		flex: 1,
		padding: 15,
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
