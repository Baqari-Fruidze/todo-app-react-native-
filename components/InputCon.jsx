import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

export default function InputCon({ setTodoList, active }) {
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
  }
  return (
    <Modal visible={active} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="my course goal"
          style={styles.inputStyles}
          onChangeText={inputValueHander}
          value={inputValue}
        />
        <Button title="add goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    // width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  inputStyles: {
    borderWidth: 1,
    borderColor: "grey",
    width: "70%",
    // marginRight: 8,
    padding: 8,
  },
});
