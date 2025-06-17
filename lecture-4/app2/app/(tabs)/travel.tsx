import React from "react"
import { StyleSheet,
    View,Image
 } from "react-native"


export default function travel (){
    return(
        <View style={styles.container}>
            <h1>Travel</h1>
            <div style={styles.cont} >
                <div>
                    <Image style={styles.img} source={require('@/assets/images/indiagate.webp')}/>
                    <h2>India Gate</h2>
                </div>
                <div>
                    <Image source={require('@/assets/images/manali.jpg')} style={styles.img}/>
                    <h2>Manali</h2>
                </div>
            </div>
        </View>
    )
}
const styles=StyleSheet.create({
    container: {
         width: '100%',
         height: '100%',
         backgroundColor: 'skyblue',
         alignItems: 'center'
    },
    cont: {
        display: 'flex',
        gap: 20
    },
    img: {
        width: 300,
        height:400,
        overflow: 'hidden',
    }
}

)