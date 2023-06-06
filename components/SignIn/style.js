import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
		padding: 20,
		backgroundColor: "white",
	},
	textInput: {
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		marginBottom: 20,
		height: 40,
		fontSize: 14,
		flex: 1,
		borderColor: "blue",
		borderRadius: 20,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		height: 35,
		width: 150,
		borderRadius: 10,
		backgroundColor: "black",
	},
	action: {
		flexDirection: "row",
		marginTop: 10,
		paddingBottom: 5,
		width: "100%",
	},
	text: {
		fontSize: 15,
		lineHeight: 21,
		fontWeight: 400,
		letterSpacing: 0.25,
		color: "#111",
		marginTop: 10,
		display: "flex",
		justifyContent: "center",
	},
	signin: {
		fontSize: 15,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "#fff",
		marginTop: 10,
		display: "flex",
		justifyContent: "flex-end",
	},
	loginButtonSection: {
		width: "100%",
		// height: '30%',
		marginTop: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	loginButton: {
		backgroundColor: "blue",
		color: "white",
		height: 40,
		justifyContent: "center", //up dwn
		alignItems: "center", //r & l
		width: "100%",
		borderRadius: 25,
	},
	eye: {
		display: "flex",
		justifyContent: "flex-end",
	},
});

export default styles;
