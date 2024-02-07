import { useNavigation, useRoute } from "@react-navigation/native"
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';

const WorkoutScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
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
                </Pressable>
            ))}

            <Pressable style={styles.startButtonStyle}>
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
        fontWeight: "bold"
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
    }
})