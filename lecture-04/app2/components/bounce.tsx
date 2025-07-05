import React, {FC, useMemo} from "react";
import { StyleSheet,View } from "react-native";
import Animated,{
    interpolate,
    useAnimatedStyle,
    withTiming,
    withSpring,
    withDelay

} from 'react-native-reanimated'
type Props={
    index: number;
    scrollX: Animated.SharedValue<number>;
}
export default function BouncyOnbarodingItem (){
    return (
    <View style={styles.container}>
        <Animated.Text style={styles.title}>
            Welcome
        </Animated.Text>
        <Animated.Text style={styles.desc}>
            This bridge is somewhere in the world joining to mountains with an amazing view
        </Animated.Text>
        <Animated.Image style={styles.image}  source={require('@/assets/images/nature.jpeg')}/>
    </View>
    )
}
const styles=StyleSheet.create({
    container:{
        alignItems: 'center',

    },
    title: {
        fontSize:24,
        fontWeight: 'bold',
        marginBottom: 10,

    },
    desc: {
        fontSize:14,
        width: "80%",
        textAlign: 'center',
        marginBottom: 10,
    },
    image : {
        width: '50%',
        height: 500,
        overflow: 'hidden',
        borderRadius: 34
    }
})