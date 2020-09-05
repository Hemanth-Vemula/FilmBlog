import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#a2c4c9",
    borderWidth: 1.5,
    borderRadius: 10,
  },
  submitButton: {
    width: "50%",
    padding: 10,
    margin: 15,
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  dataWrapper: { marginTop: -1 },
  table: { width: "100%", alignSelf: "center", margin: 20 },
  banner: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000000",
  },
  loginView: { width: "30%", alignSelf: "center" },
  buttonsView: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  retrival: {},
});
