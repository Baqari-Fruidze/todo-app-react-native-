import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

export default function GoalItem({ text, itemDelete, id }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.goalItem, pressed && styles.iosStyles]}
      onPress={() => itemDelete(id)}
      android_ripple={{ color: "#121212" }}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    padding: 8,
    backgroundColor: "purple",
    borderRadius: 8,
    overflow: "hidden",
  },
  iosStyles: {
    opacity: 0.5,
    backgroundColor: "#121212",
  },

  text: {
    color: "white",
    fontSize: 18,
  },
});
