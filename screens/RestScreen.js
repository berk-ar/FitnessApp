import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const RestScreen = () => {
    const navigation = useNavigation();
    let timer = 0;
    const [timeLeft, setTimeLeft] = useState(5);

    const startTime = () => {
        setTimeout(() => {
            if (timeLeft <= 0) {
                navigation.goBack();
                clearTimeout(timer)
            }
            setTimeLeft(timeLeft - 1)
        }, 1000)
    }

    useEffect(() => {
        startTime();

        return () => clearTimeout(timer);
    },)

    return (
        <SafeAreaView>
            <Image style={styles.timeBrakeImage} source={{ uri: "https://i.makeagif.com/media/11-20-2018/vV4psD.gif" }} />
            <Text style={styles.takeBreakText}>TAKE A BREAK</Text>
        </SafeAreaView>
    )
}

export default RestScreen

const styles = StyleSheet.create({
    timeBrakeImage: {
        width: "100%",
        height: 350,
    },
    takeBreakText: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 50,
        fontSize: 30,
        fontWeight: "bold"
    }
})