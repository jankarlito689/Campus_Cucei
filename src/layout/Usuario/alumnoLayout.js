import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Boton } from "../../Componetes/boton";

export function AlumnoLayout({user, onBack, onLogout}){
    if(!user) return <Text>Cargando informacion del alumno...</Text>

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <View style={styles.headerCard}>
                    <Text style={styles.nombre}>{user.nombre}</Text>
                    <Text style={styles.subInfo}>{user.codigo} - {user.carrera}</Text>
                    <Text style={styles.subInfo}>{user.campus} | Ciclo: {user.ciclo}</Text>
                    <Text style={[styles.subInfo, styles.situacion]}>
                        Situación: {user.situacion}
                    </Text>
                </View>

                {/* Resumen académico */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Resumen académico</Text>
                    <View style={styles.card}>
                        <Text style={styles.itemText}>Créditos:
                            <Text style={styles.highlight}> {user.creditos}</Text> / {user.creditosRequeridos}
                        </Text>
                        <Text style={styles.itemText}>Promedio:
                            <Text style={styles.highlight}> {user.promedio}</Text>
                        </Text>
                        <Text style={styles.itemText}>Certificado: {user.certificado}</Text>
                    </View>
                </View>

                {/* Avance por áreas */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Avance por áreas</Text>
                    {user.creditosAreas.map((area, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.areaTitle}>{area.area}</Text>
                        <Text style={styles.itemText}>
                            Créditos: <Text style={styles.highlight}>{area.creditos}</Text> / {area.requeridos}
                        </Text>
                        <Text style={styles.itemText}>Faltantes: {area.faltantes}</Text>
                    </View>
                    ))}
                </View>

                {/* Materias */}
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
            </ScrollView>

                {/* 🔹 Botón fijo al final */}
                <View style={styles.fixedButtonContainer}>
                    <Boton
                        title="Volver al menú"
                        color="#115688"
                        onPress={onBack}
                    />
                    <Boton 
                        title="Cerrar sesión" 
                        color="#af0a0dff" 
                        onPress={onLogout} 
                    />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f6f8",
        padding: 16,
    },
    scrollContent: {
        padding: 16,
        paddingBottom: 90, // espacio extra para que el scroll no tape contenido
    },
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
        color: "#fff",
    },
    subInfo: {
        color: "#e2e8f0",
        marginTop: 2,
    },
    situacion: {
        fontWeight: "bold",
        marginTop: 6,
        color: "#fff",
    },
    section: {
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#115688",
        marginBottom: 10,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    itemText: {
        fontSize: 15,
        color: "#334155",
        marginVertical: 2,
    },
    highlight: {
        fontWeight: "bold",
        color: "#115688",
    },
    areaTitle: {
        fontWeight: "bold",
        color: "#0f172a",
        marginBottom: 4,
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
        color: "#0f172a",
    },
    materiaInfo: {
        fontSize: 13,
        color: "#334155",
    },
    fixedButtonContainer: {
        position: "absolute",
        bottom: 35,
        left: 16,
        right: 16,
    },
});