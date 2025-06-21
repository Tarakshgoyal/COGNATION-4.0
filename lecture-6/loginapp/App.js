import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign-in</Text>
      <Text style={styles.subheading}>Welcome to our mobile app!</Text>

      <TextInput
        style={styles.input}
        placeholder='Email'
        keyboardType='email-address'
      />

      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgb(219, 223, 255)"
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold"
  },
  subheading: {
    marginBottom: 30,
    color: "rgb(134, 131, 160)",
    marginTop: 5
  },
  input: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 8,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "rgb(17, 18, 23)"
  },
  loginButton: {
    backgroundColor: "rgb(37, 82, 165)",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 8,
    marginTop: 20
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold"
  }
});
