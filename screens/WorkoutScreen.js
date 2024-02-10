import { useNavigation, useRoute } from "@react-navigation/native"
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useContext } from "react";
import { FitnessItems } from "../Context";
import { FontAwesome } from '@expo/vector-icons';

const WorkoutScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { completed, setCompleted } = useContext(FitnessItems)
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Image style={styles.workoutTopImage} source={{ uri: route.params.image }} />
                <Ionicons onPress={() => navigation.goBack()} style={{ position: "absolute", top: 15, left: 15 }} name="arrow-back" size={30} color="white" />
            </View>

            {route.params.exercises.map((item, index) => (
                <Pressable style={styles.workoutDetail} key={index}>
                    <Image style={{ width: 90, height: 90 }} source={{ uri: item.image }} />

                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.workoutText}>{item.name}</Text>
                        <Text style={styles.setsText}>x{item.sets}</Text>
                    </View>

                    {completed.includes(item.name) ? (
                        <FontAwesome style={styles.checkCircleImage} name="check-circle" size={24} color="green" />
                    ) : (
                        null
                    )}
                </Pressable>
            ))}

            <Pressable style={styles.startButtonStyle} onPress={() => {
                navigation.navigate("Fit", {
                    exercises: route.params.exercises
                })
                setCompleted([]);
            }}>
                <Text style={styles.startButtonText}>START</Text>
            </Pressable>
        </ScrollView>
    )
}

export default WorkoutScreen

const styles = StyleSheet.create({
    workoutTopImage: {
        width: "100%",
        height: 170
    },
    workoutDetail: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    workoutText: {
        fontSize: 18,
        fontWeight: "bold",
        width: 180,
    },
    setsText: {
        marginTop: 4,
        fontSize: 16,
        color: "gray"
    },
    startButtonStyle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
        borderRadius: 10,
        width: 120,
        marginLeft: "auto",
        marginRight: "auto",
        margin: 25,
        padding: 10
    },
    startButtonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    checkCircleImage: {
        marginLeft: 30,
    }
})