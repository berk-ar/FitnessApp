import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ padding: 10, backgroundColor: "gray" }}>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 16 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>Home WORKOUT</Text>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image style={styles.imageBaslik} source={require('../assets/fitnessappgorsel1.jpg')} />
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View>
                        <Text style={styles.txtSayi}>0</Text>
                        <Text style={styles.txtMetin}>WORKOUTS</Text>
                    </View>

                    <View>
                        <Text style={styles.txtSayi}>0</Text>
                        <Text style={styles.txtMetin}>KCAL</Text>
                    </View>

                    <View>
                        <Text style={styles.txtSayi}>0</Text>
                        <Text style={styles.txtMetin}>MINUTES</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    txtSayi: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        fontSize: 16,
    },
    txtMetin: {
        marginTop: 6,
    },
    imageBaslik: {
        width: "90%",
        height: 150,
        margin: 16,
        borderRadius: 7,
    },
})