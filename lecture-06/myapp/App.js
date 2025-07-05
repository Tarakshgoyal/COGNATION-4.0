import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FollowButton from './FollowButton';

export default function App() {
  return (
    <View style={styles.container}>
      
      <FollowButton text="FOLLOW" backgroundColor={"rgb(31, 101, 167)"} borderColor={"rgb(27, 89, 147)"}></FollowButton>
      <FollowButton text="SUBSCRIBE" backgroundColor={"rgb(175, 45, 33)"} borderColor={"rgb(137, 35, 25)"}></FollowButton>
      <FollowButton text="CONNECT" backgroundColor={"rgb(30, 132, 33)"} borderColor={"rgb(23, 106, 25)"}></FollowButton>

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
  }
});
