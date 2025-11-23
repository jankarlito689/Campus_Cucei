import { View, Text, StyleSheet, Dimensions } from "react-native";
import { CreeditosChart } from "../Graficas/creditosChart";
import { GaugePromedio } from "../Graficas/gaugeProm";

export function ResumAcademy({user}){
    //Creeditos de user
    const creditosCursados = Number(user?.creditos ?? 0) || 0;
    const creditosTotales = Number(user?.creditosRequeridos ?? 0) || 0;
    const promedio = Number(user?.promedio ?? 0) || 0;

    return(
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resumen académico</Text>
                <View style={styles.card}>
                    <Text style={styles.itemText}>Créditos:
                        <Text style={styles.highlight}>{creditosCursados}</Text> / {creditosTotales}
                    </Text>
                    <Text style={styles.itemText}>Promedio:
                        <Text style={styles.highlight}> {user.promedio}</Text>
                    </Text>
                    <Text style={styles.itemText}>Certificado: {user.certificado}</Text>
                </View>
                <Text style={styles.chartLabel}>Avance de creditos</Text>
                <CreeditosChart creditosCursados={creditosCursados} creditosTotales={creditosTotales} />
                <Text style={styles.chartLabel}>Tu promedio general</Text>
                <GaugePromedio value={promedio} size={230}/>
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
    chartLabel:{
        margin:10,
        marginBottom: 5,
        fontSize: 16,
        fontWeight:"bold",
        color: "#115688"
    }
});