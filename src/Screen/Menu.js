import { View, Text, Pressable } from "react-native";
import { Boton } from "../Componetes/boton";

export function MenuScreen({ onNavigate, onLogout }) {
    return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 15 }}>
        <Text>Menú de Opciones</Text>

        <Pressable onPress={() => onNavigate("mapa")}>
            <Text>Ver Mapa</Text>
        </Pressable>

        <Pressable onPress={() => onNavigate("alumno")}>
            <Text>Ver Alumno</Text>
        </Pressable>
        
        <Boton
            title="Cerrar sesión"
            color="#115688ff"
            onPress={onLogout}
        />
    </View>
    );
}
