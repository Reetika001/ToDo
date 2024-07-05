// src/components/TodoDetail.js
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install @expo/vector-icons

const TodoDetail = ({ title, description, date, onBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.icons}>
          <Ionicons
            name="time-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Ionicons
            name="pencil-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Ionicons
            name="trash-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.date}>Created at {date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  icons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 10,
  },
  description: {
    fontSize: 18,
    color: "#333",
    marginTop: 20,
  },
  date: {
    fontSize: 14,
    color: "#999",
    marginTop: 40,
    textAlign: "center",
  },
});

export default TodoDetail;
