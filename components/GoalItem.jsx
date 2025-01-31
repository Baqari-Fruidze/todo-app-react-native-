import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

export default function GoalItem({ text, itemDelete, id }) {
  return (
    <Pressable onPress={() => itemDelete(id)}>
      <Text style={styles.goalItem}>{text}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    padding: 8,
    backgroundColor: "purple",
    color: "white",
    borderRadius: 8,
    fontSize: 18,
  },
});
