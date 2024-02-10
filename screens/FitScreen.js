import { useNavigation, useRoute } from "@react-navigation/native"
import { useContext, useState } from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { FitnessItems } from "../Context";

const FitScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const exercise = route.params.exercises;
    const current = exercise[index];
    const { completed, setCompleted, workout, setWorkout, calories, setCalories, minutes, setMinutes } = useContext(FitnessItems)
    console.log(completed,"complete,exercise")
    return (
        <SafeAreaView>
            <Image style={styles.exerciseImage} source={{ uri: current.image }} />
            <View style={{ marginTop: 30 }}>
                <Text style={styles.exerciseText}>{current.name}</Text>
                <Text style={styles.setsText}>x{current.sets}</Text>
            </View>

            {index + 1 >= exercise.length ? (
                <Pressable style={styles.doneButton} onPress={() => {
                    navigation.navigate("Home")
                }}>
                    <Text style={styles.doneButtonText}>DONE</Text>
                </Pressable>
            ) : (
                <Pressable style={styles.doneButton} onPress={() => {
                    navigation.navigate("Rest")
                    setCompleted([...completed, current.name])
                    setWorkout(workout + 1)
                    setMinutes(minutes + 2.5)
                    setCalories(calories + 6.30)
                    setTimeout(() => {
                        setIndex(index + 1)
                    }, 5000)
                }}>
                    <Text style={styles.doneButtonText}>DONE</Text>
                </Pressable>
            )
            }

            <View style={styles.bottomButtons}>
                <Pressable disabled={index === 0} style={styles.buttons} onPress={() => {
                    navigation.navigate("Rest");

                    setTimeout(() => {
                        setIndex(index - 1)
                    }, 5000)
                }}>
                    <Text style={styles.text}>PREV</Text>
                </Pressable>

                {index + 1 >= exercise.length ? (
                    <Pressable style={styles.buttons} onPress={() => {
                        navigation.navigate("Home")
                    }}>
                        <Text style={styles.text}>SKIP</Text>
                    </Pressable>
                ) : (
                    <Pressable style={styles.buttons} onPress={() => {
                        navigation.navigate("Rest")

                        setTimeout(() => {
                            setIndex(index + 1)
                        }, 5000)
                    }}>
                        <Text style={styles.text}>SKIP</Text>
                    </Pressable>
                )}
            </View>

        </SafeAreaView >
    )
}

export default FitScreen

const styles = StyleSheet.create({
    exerciseImage: {
        width: "100%",
        height: 350
    },
    exerciseText: {
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 35,
        fontWeight: "bold"
    },
    setsText: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 8,
        fontSize: 25,
    },
    doneButton: {
        backgroundColor: "blue",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        borderRadius: 10,
        padding: 12
    },
    doneButtonText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        width: 75
    },
    buttons: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 20
    },
    text: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    },
    bottomButtons: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 40
    }
})