import { View, Text, Pressable, StyleSheet } from "react-native";
import { Boton } from "../Componetes/boton";

export function MenuScreen({ onNavigate, onLogout }) {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Menú de Opciones</Text>

        <View style={styles.optionsContainer}>
            <Pressable style={styles.optionCard} onPress={() => onNavigate("mapa")}>
                <Text style={styles.optionText}>Ver Mapa</Text>
            </Pressable>

            <Pressable style={styles.optionCard} onPress={() => onNavigate("alumno")}>
                <Text style={styles.optionText}>Ver Alumno</Text>
            </Pressable>
        </View>
        <View>
            <Boton
                title="Cerrar sesión"
                color="#115688ff"
                onPress={onLogout}
            />
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f4f6", // fondo suave gris claro
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#115688", // color institucional
        marginBottom: 40,
        textAlign: "center",
    },
    optionsContainer: {
        width: "100%",
        alignItems: "center",
        gap: 20, // separación entre opciones
    },
    optionCard: {
        backgroundColor: "#fff",
        width: "80%",
        paddingVertical: 25,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4, // sombra en Android
        shadowColor: "#000", // sombra en iOS
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    optionText: {
        fontSize: 18,
        color: "#333",
        fontWeight: "500",
    },
    footer: {
        position: "absolute",
        bottom: 50,
        width: "80%",
    },
});
