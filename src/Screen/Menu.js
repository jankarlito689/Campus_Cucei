import { View, Text, Pressable } from "react-native";

export function MenuScreen({ onNavigate, onLogout }) {
    return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 15 }}>
        <Text>Menú de Opciones</Text>

        <Pressable onPress={() => onNavigate("mapa")}>
            <Text>Ver Mapa</Text>
        </Pressable>

        <Pressable onPress={onLogout}>
            <Text>Cerrar sesión</Text>
        </Pressable>
    </View>
    );
}
