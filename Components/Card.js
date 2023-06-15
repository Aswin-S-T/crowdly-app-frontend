import {
	View,
	Text,
	Image,
	StyleSheet,
	Button,
	Dimensions,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import Modal from "react-native-modal";

const Card = (posts) => {
	const screenWidth = Dimensions.get("window").width;
	console.log("POST--------------", posts ? posts : "NO POST");
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};
	return (
    <View>
      {posts.posts &&
        posts.posts.length > 0 &&
        posts.posts.map((post) => (
          <View style={styles.card}>
            <View style={styles.postHeader}>
              <Image
                style={styles.thumb}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU",
                }}
              />
              <Text style={styles.username}>{post?.username}</Text>
              <Button title="Follow+" style={styles.followBtn} />
            </View>
            <View style={styles.caption}>{post?.caption}</View>
            <View>
              <Image
                style={{ width: screenWidth, height: 300, padding: 10 }}
                source={{
                  uri: post.image,
                }}
              />
            </View>
            <View style={styles.postActions}>
              <Text style={{ left: 20, position: "relative" }}>
                {/* {post?.like?.length} */}
              </Text>
              <AntDesign
                name="heart"
                size={23}
                style={{ marginLeft: 10 }}
                color="red"
              />
              <Text style={{ left: 20, position: "relative" }}>
                {/* {post?.comment?.length} */}
              </Text>
              <FontAwesome5
                name="comment-alt"
                style={{ marginLeft: 20 }}
                size={23}
                color="black"
              />
              {/* <Fontisto
								name="favorite"
								// style={{ marginLeft: 40 }}
								size={24}
								color="black"
							/> */}
            </View>
            <View style={{ padding: 10 }}>
              <Text>{post?.like?.length} Likes</Text>
              <Text onPress={toggleModal}>View all 10 comments</Text>
            </View>
            <Modal isVisible={isModalVisible}>
              <View style={styles.model}>
                <Text style={{ fontSize: 20 }}>All Comments</Text>
                {post && post.comment && post.comment.length > 0 ? (
                  post.comment.map((comment) => (
                    <View style={styles.commentList}>
                      <Text>{comment.username}</Text>
                      <Text>{comment.comment}</Text>
                    </View>
                  ))
                ) : (
                  <Text>No comments available</Text>
                )}
                <Text style={styles.close} onPress={toggleModal}>
                  X
                </Text>
              </View>
            </Modal>
          </View>
        ))}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
	commentList:{
		display:'flex',
		marginTop:20
	},
	close: {
		display: "flex",
		justifyContent: "flex-end",
		top:5,
		position:'absolute',
		right:10,
		fontSize:20
		// float:"right"
	},
	model: {
		height: 400,
		backgroundColor: "white",
		flex: 1,
		padding: 10,
	},
	caption: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	card: {
		backgroundColor: "white",
		marginTop: 10,
	},
	container: {
		flex: 1,
		backgroundColor: "white",
		padding: 15,
	},
	thumb: {
		height: 40,
		width: 40,
		borderRadius: 50,
	},
	username: {
		color: "#111",
		fontSize: 15,
		marginTop: 5,
	},
	followBtn: {
		backgroundColor: "red",
		color: "white",
		padding: 5,
		borderRadius: 5,
		width: 50,
	},
	postHeader: {
		display: "flex",
		flex: 1,
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	postActions: {
		display: "flex",
		flex: 1,
		padding: 15,
		flexDirection: "row",
		justifyContent:"flex-start",
		margin: 10,
	},
});
