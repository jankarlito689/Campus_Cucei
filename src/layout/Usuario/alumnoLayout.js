import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Boton } from "../../Componetes/boton";
import { HeaderAlumno } from "../../Componetes/Alumno/header";
import { ResumAcademy } from "../../Componetes/Alumno/resumAcademy";
import { AvanceAcademy } from "../../Componetes/Alumno/avanceAcademy";
import { Materias } from "../../Componetes/Alumno/materias";

export function AlumnoLayout({user, onBack, onLogout}){
    if(!user) return <Text>Cargando informacion del alumno...</Text>

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <HeaderAlumno user={user} />
                {/* Resumen académico */}
                <ResumAcademy user={user} />
                {/* Avance por áreas */}
                <AvanceAcademy user={user} />
                {/* Materias */}
                <Materias user={user} />
            </ScrollView>
            {/* 🔹 Botón fijo al final */}
            <View style={styles.fixedButtonContainer}>
                <Boton title="Volver al menú" color="#115688" onPress={onBack} />
                <Boton title="Cerrar sesión" color="#af0a0dff" onPress={onLogout} />
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
    fixedButtonContainer: {
        position: "absolute",
        bottom: 35,
        left: 16,
        right: 16,
    },
});