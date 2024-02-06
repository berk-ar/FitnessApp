import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import fitness from "../data/fitness"

const FitnessCards = () => {
    const FitnessData = fitness;
    return (
        <View>
            {FitnessData.map((item) => (
                <Pressable style={styles.cardHizalama}>
                    <Image style={styles.cardBoyut} source={{ uri: item.image }} />
                    <Text style={styles.cardYazi}>{item.name}</Text>
                </Pressable>
            ))}
            <Text>FitnessCards</Text>
        </View>
    )
}

export default FitnessCards

const styles = StyleSheet.create({
    cardHizalama: {
        justifyContent: "center",
        alignItems: "center",
        margin: 12,
    },
    cardBoyut: {
        width: "90%",
        height: 150,
        borderRadius: 10,
    },
    cardYazi: {
        position: "absolute",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        top: 7,
        left: 30
    }
})