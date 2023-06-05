import React, { Component } from "react";
import {
	View,
	TextInput,
	Button,
	TouchableOpacity,
	Pressable,
	Text,
	Image,
} from "react-native";
import styles from "./style";
import Feather from "react-native-vector-icons/Feather";

export default class signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			firstname: "",
			email: "",
			password: "",
			confirmPw: "",
			check_textInputChange: false,
			secureTextEntry: true,
			confirmSecureTextEntry: true,
		};
	}

	InsertRecord = () => {
		var Username = this.state.username;
		var firstName = this.state.firstname;
		var Email = this.state.email;
		var Password = this.state.password;
		var ConfirmPw = this.state.confirmPw;
		var checkEmail = RegExp(
			/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i
		);

		if (Email.length == 0 || Password.length == 0) {
			alert("Required Field Is Missing!!!");
		} else if (!checkEmail.test(Email)) {
			alert("invalid email!!!");
		} else {
			var InsertAPIURL = "http://192.168.43.229:5000/api/v1/user/register"; //API to render signup

			var headers = {
				Accept: "application/json",
				"Content-Type": "application/json",
			};

			var Data = {
				username: Username,
				firstName: firstName,
				email: Email,
				phone: "3434343434",
				password: Password,
			};

			// FETCH func ------------------------------------
			fetch(InsertAPIURL, {
				method: "POST",
				headers: headers,
				body: JSON.stringify(Data), //convert data to JSON
			})
				.then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
				.then((response) => {
					// alert(response[0].Message); // If data is in JSON => Display alert msg
					this.props.navigation.navigate("SignInScreen"); //Navigate to next screen if authentications are valid
				})
				.catch((error) => {
					alert("Error Occured" + error);
				});
		}
	};

	updateSecureTextEntry() {
		this.setState({
			...this.state,
			secureTextEntry: !this.state.secureTextEntry,
		});
	}

	updateConfirmSecureTextEntry() {
		this.setState({
			...this.state,
			confirmSecureTextEntry: !this.state.confirmSecureTextEntry,
		});
	}

	render() {
		return (
			<View style={styles.viewStyle}>
				{/* <View>
					<Image
						source={{
							uri: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp",
						}}
						style={{ width: 300, height: 200, top: -50, position: "relative" }}
					/>
				</View> */}
				<Image
					source={{
						uri: "https://cdni.iconscout.com/illustration/premium/thumb/male-web-designer-working-on-website-ui-ux-5691609-4759461.png",
					}}
					style={{ width: 350, height: 300 }}
				/>

				<View style={styles.action}>
					<TextInput
						placeholder="Enter Username"
						placeholderTextColor="#444"
						style={styles.textInput}
						onChangeText={(username) => this.setState({ username })}
					/>
				</View>
				<View style={styles.action}>
					<TextInput
						placeholder="Enter sFirst Name"
						placeholderTextColor="#444"
						style={styles.textInput}
						onChangeText={(firstname) => this.setState({ firstname })}
					/>
				</View>

				<View style={styles.action}>
					<TextInput
						placeholder="Enter Email"
						placeholderTextColor="#444"
						style={styles.textInput}
						onChangeText={(email) => this.setState({ email })}
					/>
				</View>

				<View style={styles.action}>
					<TextInput
						placeholder="Enter Password"
						placeholderTextColor="#444"
						secureTextEntry={this.state.secureTextEntry ? true : false}
						style={styles.textInput}
						onChangeText={(password) => this.setState({ password })}
					/>
					<TouchableOpacity onPress={this.updateSecureTextEntry.bind(this)}>
						{this.state.secureTextEntry ? (
							<Feather name="eye-off" color="grey" size={20} />
						) : (
							<Feather name="eye" color="black" size={20} />
						)}
					</TouchableOpacity>
				</View>

				<View style={styles.loginButtonSection}>
					<Pressable
						style={styles.loginButton}
						onPress={() => {
							this.InsertRecord();
						}}
					>
						<Text style={styles.text}>Register</Text>
					</Pressable>
				</View>
			</View>
		);
	}
}
