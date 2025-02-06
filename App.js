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
import GoalItem from "./components/GoalItem";
import InputCon from "./components/InputCon";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [modalIsActive, setModalIsActive] = useState(false);
  function itemDelete(id) {
    setTodoList((prev) => prev.filter((item) => item.key !== id));
  }
  function foo() {
    setModalIsActive(true);
  }
  return (
    <View style={styles.appContainer}>
      <Button title="add new goal" onPress={foo} color={"red"} />
      {modalIsActive && (
        <InputCon setTodoList={setTodoList} active={modalIsActive} />
      )}
      <View style={styles.goalsCon}>
        <FlatList
          data={todoList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                itemDelete={itemDelete}
                id={itemData.item.key}
              />
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

  goalsCon: {
    flex: 6,
  },
});
