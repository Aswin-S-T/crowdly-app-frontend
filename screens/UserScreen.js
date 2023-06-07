import {
	Text,
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	ScrollView,
	StatusBar,
	Image,
} from "react-native";
import React from "react";

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "First Item",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Second Item",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
	},
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "First Item",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Second Item",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
	},
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "First Item",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Second Item",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
	},
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "First Item",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Second Item",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
	},
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "First Item",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Second Item",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
	},
];

const Item = ({ image, title }) => (
	<View style={{ flexDirection: "row", alignItems: "center" }}>
		<Image
			source={{ uri: image }}
			style={{ width: 50, height: 50, marginRight: 10 }}
		/>
		<Text>{title}</Text>
	</View>
);
const Separator = () => {
	return <View style={{ height: 10, backgroundColor: "transparent" }} />;
};

const UserScreen = () => {
	const renderItem = ({ item }) => (
		<Item image={item.image} title={item.title} />
	);
	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				{/* <FlatList
					data={DATA}
					renderItem={({ item }) => <Item title={item.title} />}
					keyExtractor={(item) => item.id}
				/> */}
				<Text style={styles.heading}>All Users</Text>
				<FlatList
					style={styles.list}
					data={DATA}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
					ItemSeparatorComponent={Separator}
				/>
			</SafeAreaView>
		</ScrollView>
	);
};

export default UserScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
		padding: 15,
	},
	item: {
		backgroundColor: "blue",
		padding: 4,
		marginVertical: 5,
		marginTop: 10,
		borderRadius: 50,
		margin: 20,
	},
	title: {
		fontSize: 22,
	},
	image: {
		borderRadius: 50,
	},
	list: {
		padding: 5,
		marginTop: 10,
		top: 30,
	},
	heading: {
		fontSize: 25,
		fontWeight: 600,
		margin: 20,
	},
});
