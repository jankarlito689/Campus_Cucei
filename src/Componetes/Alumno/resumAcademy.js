import { View, Text, StyleSheet } from "react-native";

export function ResumAcademy({user}){
    return(
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
    itemText: { 
        fontSize: 15, 
        color: "#334155", 
        marginVertical: 2 
    },
    highlight: { 
        fontWeight: "bold", 
        color: "#115688" 
    },
});