import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import FitnessCards from '../components/FitnessCards';
import { useContext } from 'react';
import { FitnessItems } from '../Context';

const HomeScreen = () => {
    const { workout, calories, minutes } = useContext(FitnessItems)
    return (
        <ScrollView>
            <View style={{ padding: 10, backgroundColor: "white" }}>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 16 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>Home WORKOUT</Text>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image style={styles.imageBaslik} source={require('../assets/workout_image.jpg')} />
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View>
                        <Text style={styles.txtSayi}>{workout}</Text>
                        <Text style={styles.txtMetin}>WORKOUTS</Text>
                    </View>

                    <View>
                        <Text style={styles.txtSayi}>{calories}</Text>
                        <Text style={styles.txtMetin}>KCAL</Text>
                    </View>

                    <View>
                        <Text style={styles.txtSayi}>{minutes}</Text>
                        <Text style={styles.txtMetin}>MINUTES</Text>
                    </View>
                </View>

                <FitnessCards />
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    txtSayi: {
        textAlign: "center",
        fontWeight: "bold",
        color: "black",
        fontSize: 16,
    },
    txtMetin: {
        marginTop: 6,
    },
    imageBaslik: {
        width: "100%",
        height: 110,
        margin: 16,
        borderRadius: 7,
    },
})