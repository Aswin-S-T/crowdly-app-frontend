import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        style={styles.centeredContent}
        size="large"
        color="#0000ff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredContent: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Spinner;
