import { View, Text, StyleSheet } from "react-native";

// Componente para mostrar la descripción en una tarjeta
export function CardDescripcion({ children}) {
    return (
        <View style={[styles.card, styles]}>
            <Text style={styles.descripcion}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#dee4eaff",
        borderRadius: 12,
        paddingVertical: 1,
        paddingHorizontal: 5,
        marginTop: 2.5,
        marginHorizontal: 5,
        shadowColor: "#0f0e0eff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
    },
    descripcion: {
        marginTop: 5,
        fontSize: 13,
        color: "#333",
        textAlign: "center",
        lineHeight: 15,
        paddingHorizontal: 30,
    },
});