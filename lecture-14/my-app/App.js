import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import BigButton from "./BigButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{Platform.OS}</Text>
      <Text style={{ fontSize: 50 }}>{Platform.Version}</Text>
      <BigButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        backgroundColor: "red",
        alignItems: "flex-start",
      },
      android: {
        backgroundColor: "green",
        alignItems: "flex-end",
      },
    }),
  },
});
