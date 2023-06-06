import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Crowdly</Text>
		</View>
	);
};

export default Header;
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
});
