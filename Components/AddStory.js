import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { BACKEND_URL } from "../constants/api";

const AddStory = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      AsyncStorage.getItem("user").then((userData) => {
        if (userData) {
          setCurrentUser(JSON.parse(userData));
        }
      });
    };
    fetchUser();
  }, []);

  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }

    if (status === "granted") {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!response.cancelled) {
        setStory(response.uri);
      }
    }
  };

  const uploadProfileImage = async () => {
    const formData = new FormData();

    let dataToSend = {
      userId: currentUser?._id,
      data: story,
      username: currentUser?.username,
    };

    try {
      setLoading(true);
      let res = await fetch(`${BACKEND_URL}/api/v1/user/upload-story`, {
        method: "POST",
        body: JSON.stringify(dataToSend),
        headers: { "Content-Type": "application/json" },
      });

      if (res.status == 200) {
        setLoading(false);
        setSuccess(true);
        SweetAlert.showAlertWithOptions({
          title: "Success",
          subTitle: "Your post added",
          confirmButtonTitle: "OK",
          confirmButtonColor: "#007AFF",
          onConfirm: () => {
            console.log("OK pressed");
          },
        });
        props.navigation.dispatch(StackActions.replace("UserProfile"));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={openImageLibrary}
          style={styles.uploadBtnContainer}
        >
          {story ? (
            <Image
              source={{ uri: story }}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            // <Text style={styles.uploadBtn}>Upload Image</Text>
            <Feather
              name="plus-circle"
              size={29}
              style={styles.addStory}
              color="black"
            />
          )}
        </TouchableOpacity>

        {story ? (
          <Text
            onPress={uploadProfileImage}
            style={[
              styles.skip,
              {
                backgroundColor: "grey",
                color: "white",
                borderRadius: 8,
                padding: 5,
              },
            ]}
          >
            {loading ? (
              <>Uploading....</>
            ) : !success ? (
              <>Upload</>
            ) : (
              <>
                <Feather
                  name="plus-circle"
                  size={29}
                  style={styles.addStory}
                  color="black"
                />
              </>
            )}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default AddStory;

const styles = StyleSheet.create({
  addStory: {
    // marginTop: 30,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 60,
    height: 80,
    margin: 8,
    borderWidth: 2,
    borderColor: "#FE2E9A",
    backgroundColor: "transparent",
  },
  storyBox: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FBFBFB",
  },
  thumb: {
    height: 80,
    width: 60,
    borderRadius: 10,
    margin: 8,
    borderWidth: 2,
    borderColor: "#FE2E9A",
  },
});
