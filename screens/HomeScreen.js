import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Post from "../Components/Post";
import SpinnerComponent from "../Components/SpinnerComponent";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { BACKEND_URL } from "../constants/api";
import Card from "../Components/Card";
import Story from "../Components/Story";

const HomeScreen = () => {
  const screenWidth = Dimensions.get("window").width;
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/user/all-post`)
      .then((response) => {
        setPost(response.data.data);
        setLoading("false");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView>
      {/* <Header /> */}
      {/* <View>
				{loading ? (
					<SpinnerComponent />
				) : (
					<View>
						<Post posts={posts} />
					</View>
				)}
			</View> */}
      <Story />
      <View style={{ backgroundColor: "#F0FBF9" }}>
        <View>
          <Card posts={posts} />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  storyBox: {
    display: "flex",
    flexDirection: "row",
  },
  thumb: {
    height: 100,
    width: 80,
    borderRadius: 5,
    margin: 10,
  },
});
