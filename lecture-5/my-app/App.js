import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [task, setTask] = useState([]);

  const addTask = () => {
    ///[x,y,z] -> x , y , z + userInput => [x,y,z,userInput]

    // task -> [x,y,z]
    // ...task -> x,y,z
    // [...task,userInput] => [x,y,z,userInput]

    // task -> [{} , {} , {} , {newObject}]

    const newTask = {
      id: Date.now().toString(),
      name: userInput.trim(),
      isCompleted: false,
    };

    setTask((someTask) => [...someTask, newTask]);
    console.log(task);
    setUserInput("");
  };

  const makeTaskComplete = (id) => {
    setTask((taskItem) =>
      task.map((taskItem) =>
        taskItem.id === id
          ? { ...taskItem, isCompleted: !taskItem.isCompleted }
          : taskItem
      )
    );
    console.log(task.filter((task) => task.id === id));
  };

  // Flat List will give you input you don't need to additionally anything !
  const renderTask = ({ item }) => {
    return (
      <View>
        <View key={item.id}>
          <Pressable onPress={() => makeTaskComplete(item.id)}>
            <Text>
              {item.name} Task Completed: {item.isCompleted.toString()}
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>Todo APP</Text>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <TextInput
          value={userInput}
          onChangeText={setUserInput}
          placeholder="Enter the Value Here"
          style={{ borderWidth: 1 }}
        />

        <Pressable onPress={addTask}>
          <View style={{ flexDirection: "row", alignContent: "center" }}>
            <Ionicons name="add"></Ionicons>
          </View>
        </Pressable>
      </View>
      {/* {task && task.map((taskObj) => <Text>{taskObj.name}</Text>)} */}
      <FlatList
        style={{ padding: 10, paddingTop: 10 }}
        data={task}
        renderItem={renderTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
});
