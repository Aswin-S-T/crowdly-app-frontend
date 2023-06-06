import {
	View,
	Text,
	Image,
	StyleSheet,
	Button,
	Dimensions,
	ScrollView,
} from "react-native";

const ChatHeader = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Messages</Text>
		</View>
	);
};

export default ChatHeader;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "blue",
		padding: 4,
	},
	text: {
		color: "white",
		fontSize: 18,
		fontSize: 25,
		fontWeight: "bold",
	},
});
