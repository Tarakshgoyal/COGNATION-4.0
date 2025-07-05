import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FlatList, TextInput } from 'react-native-web';

export default function App() {
  const [contact, setContact] = useState("");
  const [contacts, setContacts] = useState([]);

  function addContact() {
    if (contact.trim() === "") return;

    setContacts([...contacts, contact]);
    setContact("");
  }

  return (
    <View style={styles.container}>
      <Text>Contacts App</Text>

      <TextInput
        style={styles.input}
        placeholder='Contact name'
        value={contact}
        onChangeText={setContact}
        />

      <Button
        title='Add contact'
        onPress={addContact}
        />

      <FlatList
        data={contacts}
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
  input: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10
  }
});
