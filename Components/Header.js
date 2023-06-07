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
		backgroundColor: "#1F45FC",
		padding: 25,
		top: 0,
		position: "absolute",
	},
	text: {
		color: "#fff",
		fontSize: 18,
		fontSize: 25,
		fontWeight: 600,
	},
});
