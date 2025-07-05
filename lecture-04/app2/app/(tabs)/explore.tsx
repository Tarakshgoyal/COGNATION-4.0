import React from "react";
import { StyleSheet,View } from "react-native";
import { Image } from "react-native";
export default function food(){
  return (
    <View style={styles.container} >
      <h1>Food Corner</h1>
      <div style={styles.cont}>
        <div>
          <Image style={styles.img} source={require('@/assets/images/burger.webp')} />
          <h2>This is a burger</h2>
        </div>
        <div>
          <Image source={require('@/assets/images/fries.jpg')} style={styles.img}/>
          <h2>Fries</h2>
        </div>
      </div>
      <div style={styles.cont}>
        <div>
          <Image source={require('@/assets/images/hotdog.jpg')} style={styles.img}/>
          <h2>Hot Dog</h2>
        </div>
        <div>
          <Image source={require('@/assets/images/coke.jpg')} style={styles.img}/>
          <h2>Coca cola</h2>
        </div>
      </div>
    </View>
  )
}
const styles= StyleSheet.create({
  container: {
    backgroundColor: '#f83',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  cont: {
    display: 'flex',
    gap: 40,
  },
  img: {
    width: 300,
    height: 200,
    overflow: 'hidden'
  }
})