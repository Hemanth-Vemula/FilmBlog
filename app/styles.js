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
  head: { height: 40, backgroundColor: "#F0F0E1" },
  text: { margin: 6 },
  dataWrapper: { marginTop: -1 },
  table: { width: "100%", alignSelf: "center", margin: 20 },
  banner: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 50,
    marginTop: 50,
  },
  loginView: { width: "30%", alignSelf: "center", marginBottom: 50 },
  buttonsView: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  retrival: { marginTop: 50, marginBottom: 30 },
  paginationWrapper: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "black",
    marginLeft: 10,
  },
});
