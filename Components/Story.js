import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Dimensions,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import AddStory from "./AddStory";
import axios from "axios";
import { BACKEND_URL } from "../constants/api";
import Lightbox from "react-native-lightbox";

function Story() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/user/get-story`)
      .then((response) => {
        setStories(response.data.data);
        setLoading("false");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleImageClick = () => {
    setSelected(true);
  };

  return (
    <ScrollView horizontal={true}>
      <View style={styles.storyBox}>
        {/* <Feather
          name="plus-circle"
          size={29}
          style={styles.addStory}
          color="black"
        /> */}
        <AddStory />
        {stories &&
          stories.length > 0 &&
          stories.map((story) => (
            <Lightbox>
              <Image
                onPress={handleImageClick}
                style={[styles.thumb, selected && styles.fullwidth]}
                source={{
                  uri: story?.story,
                }}
              />
            </Lightbox>
          ))}
      </View>
    </ScrollView>
  );
}

export default Story;

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
  fullwidth: {
    width: "100%",
  },
});
