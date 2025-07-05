import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text.trim().length === 0) return; // Prevent empty tasks
    const newTask = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setText("");
  };

  const toggleTaskComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderTask = ({ item, index }) => (
    <View style={styles.taskContainer}>
      <Pressable
        style={styles.taskItem}
        onPress={() => toggleTaskComplete(item.id)}
      >
        <Ionicons
          name={item.completed ? "checkbox" : "square-outline"}
          size={24}
          color={item.completed ? "#4CAF50" : "#757575"}
        />
        <Text
          style={[styles.taskText, item.completed && styles.taskTextCompleted]}
        >
          {index + 1}. {item.text}
        </Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.header}>To-Do List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Enter a task..."
          placeholderTextColor="#B0BEC5"
        />
        <Pressable style={styles.addButton} onPress={addTask}>
          <Ionicons name="add" size={24} color="#FFF" />
        </Pressable>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tasks yet. Add one!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#212121",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  addButton: {
    backgroundColor: "#2196F3",
    borderRadius: 8,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  taskList: {
    flex: 1,
    marginHorizontal: 16,
  },
  taskContainer: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  taskText: {
    fontSize: 16,
    color: "#212121",
    marginLeft: 10,
    flex: 1,
  },
  taskTextCompleted: {
    textDecorationLine: "line-through",
    color: "#757575",
  },
  emptyText: {
    textAlign: "center",
    color: "#757575",
    fontSize: 16,
    marginTop: 20,
  },
});
