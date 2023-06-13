import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants/api";

const UserScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/api/v1/user/all-users`)
      .then((response) => {
        setUsers(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const sendFollow = async () => {};

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {loading ? (
          <Text>Loading....</Text>
        ) : (
          users.map((user) => (
            <View style={styles.postHeader}>
              <Image
                style={styles.thumb}
                source={{
                  uri: user.profileImage,
                }}
              />
              <Text>{user?.username}</Text>
              <Button title="Follow+" onPress={sendFollow} />
            </View>
          ))
        )}
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
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  postHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
});
