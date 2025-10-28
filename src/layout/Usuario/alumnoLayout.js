import { ScrollView, View, Text } from "react-native";
import { Boton } from "../../Componetes/boton";
export function AlumnoLayout({user, onBack}){
    if(!user) return <Text>Cargando informacion del alumno...</Text>

    return(
        <ScrollView style={{flex:1, padding:16}}>
            {/* Header */}
            <View>
                <Text style={{ fontSize: 22, fontWeight: "bold"}}>{user.nombre}</Text>
                <Text>{user.codigo} - {user.carrera}</Text>
                <Text>{user.campus} | Ciclo: {user.ciclo}</Text>
                <Text>Situación: {user.situacion}</Text>
            </View>
            {/* Sección 2: Resumen académico */}
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Resumen académico</Text>
                <Text>Créditos: {user.creditos} / {user.creditosRequeridos}</Text>
                <Text>Promedio: {user.promedio}</Text>
                <Text>Certificado: {user.certificado}</Text>
            </View>
            {/* Sección 3: Avance por áreas */}
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Avance por áreas</Text>
                {user.creditosAreas.map((area, index) => (
                    <View key={index} style={{ marginVertical: 5 }}>
                        <Text>{area.area}</Text>
                        <Text>{area.creditos} / {area.requeridos} créditos</Text>
                        <Text>Faltantes: {area.faltantes}</Text>
                    </View>
                ))}
            </View>
            {/* Sección 4: Materias */}
            <View style={{ marginTop: 15 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Materias cursadas</Text>
                {user.materias.map((mat, index) => (
                    <View key={index} style={{ marginVertical: 5 }}>
                        <Text>{mat.descripcion} ({mat.ciclo})</Text>
                        <Text>Calificación: {mat.calificacion}</Text>
                        <Text>Tipo: {mat.tipo}</Text>
                    </View>
                ))}
            </View>
            <Boton 
                title='Volver a menu'
                color='#115688ff'
                onPress={onBack}
            />
        </ScrollView>
    )
}