import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  label: {
    width: "90%",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 20,
    color: "#f92e64",
  },
  inputText: {
    width: "90%",
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomColor: "#f92e64",
    borderBottomWidth: 1,
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonNewTask: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 50,
    left: 20,
    backgroundColor: "#f92e6a",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconSave: {
    color: "#ffffff",
    fontSize: 15,
  },
});

export default styles;
