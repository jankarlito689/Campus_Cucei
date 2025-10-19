import { View, Image, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";

/**
 *Componente reutilizable para mostrar un carrusel de imágenes
 *
 * Props:
 *  - imagenes: array de imágenes locales o remotas
 *  - height: alto opcional del carrusel (default: 175)
 *  - width: ancho opcional del carrusel (default: "100%")
 *  - style: estilos adicionales opcionales
 */
export function CarruselImg({ imagenes = [], height = 175, width = "100%", style}){
    return(
        <PagerView style={[styles.pager,{ height, width}, style]} initialPage={0}>
            {imagenes.map((imgSrc, index) => (
                <View style={styles.page} key={index}>
                    <Image source={imgSrc} style={styles.imagen} />
                </View>
            ))}
        </PagerView>
    )
}

const styles = StyleSheet.create({
    pager: {
        height: 175,
        width: "100%",
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: 15,
        backgroundColor: "#f9fafb",
    },
    page: {
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
    },
    imagen: {
        width: 295,
        height: 135,
        borderRadius: 15,
        marginBottom: 10,
        resizeMode: "cover",
    },
})