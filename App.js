import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
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
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="my course goal"
          style={styles.inputStyles}
          onChangeText={inputValueHander}
          value={inputValue}
        />
        <Button title="add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsCon}>
        <FlatList
          data={todoList}
          renderItem={(itemData) => {
            return (
              <Text key={itemData.key} style={styles.goalItem}>
                {itemData.item.text}
              </Text>
            );
          }}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flex: 1,
  },
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
  goalsCon: {
    flex: 6,
  },
  goalItem: {
    margin: 10,
    padding: 8,
    backgroundColor: "purple",
    color: "white",
    borderRadius: 8,
    fontSize: 18,
  },
});
