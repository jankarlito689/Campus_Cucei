import { Pressable, Text, StyleSheet } from "react-native";

export function Boton({
    onPress,
    title = "Boton",
    color = "#2196F3",
    textColor = "white",
    style,
}){
    return(
        <Pressable
            style={({pressed}) => [
                styles.botonBase,
                {backgroundColor: color},
                pressed && {opacity: 0.8},
                style, // Permite pasar estilos adicionales desde el componente padre
            ]}
            onPress={onPress}
        >
            <Text style={[styles.botonTexto, {color: textColor}]}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    botonBase: {
        marginTop: 12,
        padding: 9,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    botonTexto:{
        foontWeight: "bold",
        textAlign: "center",
    }
});