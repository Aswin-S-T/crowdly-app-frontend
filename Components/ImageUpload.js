import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { StackActions } from "@react-navigation/native";

import axios from "axios";
import { BACKEND_URL } from "../constants/api";

const ImageUpload = (props) => {
	const [profileImage, setProfileImage] = useState("");
	const [progress, setProgress] = useState(0);

	const openImageLibrary = async () => {
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (status !== "granted") {
			alert("Sorry, we need camera roll permissions to make this work!");
		}

		if (status === "granted") {
			const response = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
			});

			if (!response.cancelled) {
				setProfileImage(response.uri);
			}
		}
	};

	const uploadProfileImage = async () => {
		const formData = new FormData();
		formData.append("profile", {
			name: new Date() + "_profile",
			data: profileImage,
			type: "image/jpg",
		});

		let dataToSend = {
			userId: "12345678",
			data: profileImage,
			imageType: "feed",
			caption: "testcaption",
			about: "test abour",
		};

		try {
			let res = await fetch(`${BACKEND_URL}/api/v1/user/add-post`, {
				method: "POST",
				body: JSON.stringify(dataToSend),
				headers: { "Content-Type": "application/json" },
			});

			if (res.data.success) {
				props.navigation.dispatch(StackActions.replace("UserProfile"));
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<View style={styles.container}>
			<View>
				<TouchableOpacity
					onPress={openImageLibrary}
					style={styles.uploadBtnContainer}
				>
					{profileImage ? (
						<Image
							source={{ uri: profileImage }}
							style={{ width: "100%", height: "100%" }}
						/>
					) : (
						<Text style={styles.uploadBtn}>+</Text>
					)}
				</TouchableOpacity>
				<Text style={styles.skip}>Skip</Text>
				{profileImage ? (
					<Text
						onPress={uploadProfileImage}
						style={[
							styles.skip,
							{ backgroundColor: "green", color: "white", borderRadius: 8 },
						]}
					>
						Upload
					</Text>
				) : null}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	uploadBtnContainer: {
		height: 50,
		width: 50,
		borderRadius: 125 / 2,
		justifyContent: "center",
		alignItems: "center",

		borderWidth: 1,
		overflow: "hidden",
		backgroundColor: "blue",
		color: "white",
		fontSize: 25,
	},
	uploadBtn: {
		textAlign: "center",
		fontSize: 16,
		opacity: 0.3,
		fontWeight: "bold",
		color: "white",
	},
	skip: {
		textAlign: "center",
		padding: 10,
		fontSize: 16,
		fontWeight: "bold",
		textTransform: "uppercase",
		letterSpacing: 2,
		opacity: 0.5,
	},
});

export default ImageUpload;
