import { Pressable } from "react-native";
import { View, Text } from "react-native";

export default function BigButton() {
  return (
    <View>
      <Text style={{ fontSize: 40, color: "yellow" }}>Big Button</Text>
      <Pressable style={{ backgroundColor: "yellow" }}></Pressable>
    </View>
  );
}
