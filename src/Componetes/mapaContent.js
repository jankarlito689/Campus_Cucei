import { View, Image, StyleSheet } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import { ZonaInteractiva } from './zonaInteractiva';
import { zonas } from '../Services/zonaService';

export function MapaContent ({ setActivo}){
    return(
        <View style={styles.mapContainer}>
            <ImageZoom cropWidth={550} cropHeight={650} imageWidth={650} imageHeight={650} minScale={1} maxScale={3}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={require("../../assets/Img/mapa_2024.jpg")}
                        style={styles.map}
                    />
                    {/* ZONAS INTERACTIVAS */}
                    {zonas.map((zona) => (
                        <ZonaInteractiva
                            key={zona.id}
                            id={ zona.id}
                            setActivo={ setActivo}
                            style={zona.style}
                        />
                        ))}
                </View>
            </ImageZoom>
        </View>
    )
}
const styles = StyleSheet.create({
mapContainer: {
    borderRadius: 20,
    width: 550,
    height: 650,
    position: "relative",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "#fff",
},
imageWrapper: {
    position: "relative",
},
map: {
    width: 590,
    height: 650,
    borderRadius: 20,
    resizeMode: "contain",
    transform: [{ rotate: "90deg" }],
},
});