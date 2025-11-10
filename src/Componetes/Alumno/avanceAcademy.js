import { View, Text, StyleSheet } from "react-native";

export function AvanceAcademy({user}){
    return(
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
    card: { 
        backgroundColor: "#fff", 
        borderRadius: 10, 
        padding: 12, 
        marginBottom: 10, 
        elevation: 2 
    },
    areaTitle: { 
        fontWeight: "bold", 
        color: "#0f172a", 
        marginBottom: 4 
    },
    itemText: { 
        fontSize: 15, 
        color: "#334155" 
    },
    highlight: { 
        fontWeight: "bold", 
        color: "#115688" 
    },
});
