import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const arr = [];
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "column",
    // flexDirection: "column-reverse",
    // flexDirection: "row-reverse",
    // gap: 20,
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
});
