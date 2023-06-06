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

const Post = (posts) => {
	const screenWidth = Dimensions.get("window").width;
	console.log("POSTS---------------", posts);
	return (
		<View>
			{posts.posts &&
				posts.posts.length > 0 &&
				posts.posts.map((post) => (
					<View style={{ backgroundColor: "white" }}>
						<View style={styles.postHeader}>
							<Image
								style={styles.thumb}
								source={{
									uri: post.image,
								}}
							/>
							<Text style={styles.postImage}>{post.username}</Text>
							<Button
								style={styles.followBtn}
								// onPress={onPressLearnMore}
								title="Follow+"
								// color="blue"
								accessibilityLabel="Learn more about this purple button"
							/>
						</View>
						<View>
							<Image
								style={{ width: screenWidth, height: 300 }}
								source={{
									uri: post.image,
								}}
							/>
						</View>
						<View style={styles.postActions}>
							{post.like.length} Likes
							<Ionicons style={styles.icons} name="heart-outline" />
							<Ionicons style={styles.icons} name="chatbubble-outline" />
						</View>
						<View>
							<Text>Liked by 400 peoples</Text>
						</View>
						<View style={styles.line} />
					</View>
				))}
		</View>
	);
};

export default Post;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		padding: 15,
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
		borderRadius: "50%",
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
});
