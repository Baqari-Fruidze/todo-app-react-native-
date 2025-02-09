import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

export default function InputCon({ setTodoList, active, setActive }) {
  const [inputValue, setInputValue] = useState("");
  function inputValueHander(value) {
    setInputValue(value);
  }
  function addGoalHandler() {
    setTodoList((prev) => [
      ...prev,
      { text: inputValue, key: Math.random().toString() },
    ]);
    setInputValue("");
    setActive(false);
  }
  function foo() {
    setActive(false);
  }
  return (
    <Modal visible={active} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.imgStyle} source={require("../assets/icon.png")} />
        <TextInput
          placeholder="my  goal"
          style={styles.inputStyles}
          onChangeText={inputValueHander}
          value={inputValue}
        />
        <View style={styles.BtnCon}>
          <Button title="add goal" onPress={addGoalHandler} color={"#5e0acc"} />
          <Button title="Cancel" onPress={foo} color={"red"} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  BtnCon: {
    flexDirection: "row",
    gap: 40,
    marginTop: 20,
  },
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 20,
  },
  inputContainer: {
    flex: 1,
    // width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  inputStyles: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "grey",
    width: "90%",
    // marginRight: 8,
    padding: 10,
    paddingLeft: 20,
    fontSize: 16,
    color: "#fff",
    borderRadius: 6,
  },
  placeholderTextColor: "#fff",
});
