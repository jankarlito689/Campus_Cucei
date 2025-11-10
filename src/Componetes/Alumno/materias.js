import { View, Text, StyleSheet } from "react-native";

export function Materias({user}){
    return(
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Materias cursadas</Text>
            {user.materias.map((mat, index) => (
                <View key={index} style={styles.materiaCard}>
                    <Text style={styles.materiaTitle}>{mat.descripcion}</Text>
                    <Text style={styles.materiaInfo}>Ciclo: {mat.ciclo}</Text>
                    <Text style={[styles.materiaInfo]}>
                        Calificación: {mat.calificacion}
                    </Text>
                    <Text style={styles.materiaInfo}>Tipo: {mat.tipo}</Text>
                </View>
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    section: { 
        marginTop: 10 
    },
    sectionTitle: { 
        fontSize: 18, 
        fontWeight: "bold", 
        color: "#115688", 
        marginBottom: 10 
    },
    materiaCard: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
        borderLeftWidth: 5,
        borderLeftColor: "#115688",
    },
    materiaTitle: { 
        fontWeight: "bold", 
        fontSize: 15, 
        color: "#0f172a" },
    materiaInfo: { 
        fontSize: 13, 
        color: "#334155" 
    },
});