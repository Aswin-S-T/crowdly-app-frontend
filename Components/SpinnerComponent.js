import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

class SpinnerComponent extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 50,
	},
});

export default SpinnerComponent;
