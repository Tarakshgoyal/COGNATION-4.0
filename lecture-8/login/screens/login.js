import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity } from "react-native";
import Animated,{FadeInUp} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function Loginscreen() {
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/background.png')} />
            <View style={styles.container2}>
                <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} style={{height: 225, width:90}} source={require('../assets/light.png')} />
                <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(3)} style={{height: 160, width:65}} source={require('../assets/light.png')} />
            </View>
            <View style={styles.formcontainer}>
                <View style={{alignItems: 'center', marginBottom: 120}}>
                    <Animated.Text entering={FadeInUp.duration(1000).springify()} style={styles.text}>Login</Animated.Text>
                </View>
                <View style={styles.inputcontainer}>
                    <TextInput placeholder="Email" placeholderTextColor={'black'} style={styles.input}/>
                    <TextInput placeholder="Password" placeholderTextColor={'black'} style={styles.input} secureTextEntry/>
                    <TouchableOpacity style={styles.loginbutton}><Text style={{color:'white', textAlign: 'center'}}>Login</Text></TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'center' ,marginTop: 20}}>
                    <Text>Don't have an accont?</Text>
                    <TouchableOpacity onPress={()=>navigation.push('signup')}> 
                        <Text style={styles.sign}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    img : {
        width: '100%',
        height: '100%',
        position: 'absolute',

    },
    container2:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        position: 'absolute',
        top: 50,
    },
    formcontainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingbotton: 20,
        marginTop: 100
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    inputcontainer: {
        gap: 10
    },
    input: {
        backgroundColor: 'rgba(255,255,255,3)',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    loginbutton: {
        backgroundColor:'blue',
        padding: 12,
        borderRadius: 10,
    },
    sign: {
        color: 'blue',
    }
})