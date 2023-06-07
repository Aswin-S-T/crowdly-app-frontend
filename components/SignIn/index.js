import React, { Component } from "react";
import {
	View,
	Pressable,
	Text,
	TextInput,
	TouchableOpacity,
	Button,
	Image,
	Dimensions,
} from "react-native";
import styles from "./style";
import Feather from "react-native-vector-icons/Feather";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default class signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			check_textInputChange: false,
			secureTextEntry: true,
		};
	}

	InsertRecord = () => {
		var Email = this.state.email;
		var Password = this.state.password;

		if (Email.length == 0 || Password.length == 0) {
			alert("Required Field Is Missing!!!");
		} else {
			var APIURL = "http://192.168.43.229:5000/api/v1/user/login";

			var headers = {
				Accept: "application/json",
				"Content-Type": "application/json",
			};

			var Data = {
				email: Email,
				password: Password,
			};

			fetch(APIURL, {
				method: "POST",
				headers: headers,
				body: JSON.stringify(Data),
			})
				.then((Response) => Response.json())
				.then(async (Response) => {
					await AsyncStorage.setItem("isLoggedIn", "true");
					this.props.navigation.navigate("HomeScreen");
					console.log(Data);
				})
				.catch((error) => {
					console.error("ERROR FOUND" + error);
				});
		}
	};

	updateSecureTextEntry() {
		this.setState({
			...this.state,
			secureTextEntry: !this.state.secureTextEntry,
		});
	}

	render() {
		return (
			<View style={styles.viewStyle}>
				<Image
					source={{
						uri: "https://cdni.iconscout.com/illustration/premium/thumb/male-web-designer-working-on-website-ui-ux-5691609-4759461.png",
					}}
					style={{ width: 350, height: 300 }}
				/>
				<View style={styles.action}>
					<TextInput
						placeholder="Enter Email"
						placeholderTextColor="grey"
						style={styles.textInput}
						onChangeText={(email) => this.setState({ email })}
					/>
				</View>

				<View style={styles.action}>
					<TextInput
						placeholder="Enter Password"
						placeholderTextColor="grey"
						style={styles.textInput}
						secureTextEntry={this.state.secureTextEntry ? true : false}
						onChangeText={(password) => this.setState({ password })}
					/>
				</View>
				{/* <View style={styles.eye}>
					<TouchableOpacity onPress={this.updateSecureTextEntry.bind(this)}>
						{this.state.secureTextEntry ? (
							<Feather name="eye-off" color="grey" size={20} />
						) : (
							<Feather name="eye" color="black" size={20} />
						)}
					</TouchableOpacity>
				</View> */}
				{/* Button */}

				<View style={styles.loginButtonSection}>
					<Pressable
						style={styles.loginButton}
						onPress={() => {
							this.InsertRecord();
						}}
					>
						<Text style={styles.signin}>Sign In</Text>
					</Pressable>
				</View>

				<View>
					<Pressable
						onPress={() => {
							this.props.navigation.navigate("SignUpScreen");
						}}
					>
						<Text style={styles.text}>You dont have an account ? SignUp</Text>
					</Pressable>
				</View>
			</View>
		);
	}
}
