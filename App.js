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
  function itemDelete(id) {
    setTodoList((prev) => prev.filter((item) => item.key !== id));
  }
  return (
    <View style={styles.appContainer}>
      <InputCon setTodoList={setTodoList} />
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
