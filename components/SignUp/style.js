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
    // height: 40,
    padding: 4,
    fontSize: 14,

    flex: 1,
    borderColor: "#FE2E9A",
    borderRadius: 20,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    paddingBottom: 5,
    width: "100%",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textTransform: "uppercase",
  },
  loginButtonSection: {
    width: "100%",
    // height: '30%',
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#FE2E9A",
    color: "white",
    // height: 40,
    padding: 10,
    justifyContent: "center", //up dwn
    alignItems: "center", //r & l
    width: "100%",
    borderRadius: 20,
    top: -40,
    position: "relative",
  },
});

export default styles;
