import {StatusBar } from 'expo-status-bar'
import { StyleSheet,Text,View } from 'react-native'
import BouncyOnbarodingItem from '@/components/bounce'

export default function homescreen(){
  return(
    <View style={styles.container}>
      {/* <p>hello</p>
      <h1>Hello</h1>
      <h2>hello</h2>
      <button style={styles.button}>click</button> */}
      <BouncyOnbarodingItem />
    </View>
  )
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'blue'
  },
  button: {
    width: 500,
    height: 200,
    backgroundColor: 'blue',
    color: 'red',
  }
})