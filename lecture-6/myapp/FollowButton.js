import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function FollowButton({ text, backgroundColor, borderColor }) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColor, borderColor: borderColor}]}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 5,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 15,
        marginBottom: 10
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }
});