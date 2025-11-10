import { Pressable, StyleSheet } from "react-native";

/**
 * Componente genérico para zonas interactivas del mapa.
 * Recibe:
 *  - id: nombre del módulo o zona ("rectoria", "quimica", etc.)
 *  - setActivo: función que activa el modal correspondiente
 *  - style: estilos específicos de la zona (posición, tamaño, color)
 */

export function ZonaInteractiva({id, setActivo, style}){
    return(
        <Pressable
            onPress={() => setActivo(id)}
            style={({ pressed }) => [
                style,
                StyleSheet.zoneBase,
                pressed && style.zonePressed,
            ]}
        />
    );
}