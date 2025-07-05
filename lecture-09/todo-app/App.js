import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addTask() {
    if (task.trim()) {
      setTaskList([...taskList, task.trim()]);
      setTask("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Simple TODO App</Text>

      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder='Enter a task'
      />

      <Button
        title='Add Task'
        onPress={addTask}
      ></Button>

      <FlatList
        data={taskList}
        renderItem={({item}) => (
          <Text>{item}</Text>
        )}
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20
  },
  input: {
    borderColor: "rgb(161, 161, 161)",
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: "rgb(247, 247, 247)",
    marginBottom: 10
  }
});
