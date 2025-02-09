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
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import InputCon from "./components/InputCon";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [modalIsActive, setModalIsActive] = useState(false);
  function itemDelete(id) {
    setTodoList((prev) => prev.filter((item) => item.key !== id));
  }
  function modalActivator() {
    setModalIsActive(true);
  }
  function modalDeactiovator() {
    setModalIsActive(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="add new goal"
          onPress={modalActivator}
          color={"#a065ec"}
        />
        {modalIsActive && (
          <InputCon
            setTodoList={setTodoList}
            active={modalIsActive}
            setActive={setModalIsActive}
          />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a",
  },

  goalsCon: {
    flex: 6,
  },
});
