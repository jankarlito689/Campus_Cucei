import { View, Text, StyleSheet } from "react-native";

export function HeaderAlumno({user}){
    return(
        <View style={styles.headerCard}>
            <Text style={styles.nombre}>{user.nombre}</Text>
            <Text style={styles.subInfo}>{user.codigo} - {user.carrera}</Text>
            <Text style={styles.subInfo}>{user.campus} | Ciclo: {user.ciclo}</Text>
            <Text style={[styles.subInfo, styles.situacion]}>
                            Situación: {user.situacion}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    headerCard: {
        backgroundColor: "#115688",
        borderRadius: 12,
        padding: 16,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
    },
    nombre: { 
        fontSize: 22, 
        fontWeight: "bold", 
        color: "#fff" 
    },
    subInfo: { 
        color: "#e2e8f0", 
        marginTop: 2 
    },
    situacion: { 
        fontWeight: "bold", 
        marginTop: 6, 
        color: "#fff" 
    },
});
