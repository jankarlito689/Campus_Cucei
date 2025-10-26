//layout de login
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Boton } from "../../Componetes/boton";
import { useState } from "react";

export function LoginLayout({ codigo, nip, onCodigoChange, onPasswordChange, onSubmit, error }) {
    const [showPassword, setShowPassword] = useState(false);
return (
    <View style={styles.container}>
        <Text style={styles.title}>Iniciar sesión</Text>
        <TextInput
            style={styles.input}
            placeholder="Código de alumno"
            value={codigo}
            onChangeText={onCodigoChange}
        />
        <View style={styles.passwordContainer}>
            <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Contraseña"
                secureTextEntry={!showPassword}
                value={nip}
                onChangeText={onPasswordChange}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.toggle}>
                <Text style={{ color: "#2563eb", fontWeight: "bold" }}>
                    {showPassword ? "Ocultar" : "Ver"}
                </Text>
            </Pressable>
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Boton 
            title="Entrar"
            color="#2563eb"
            onPress={onSubmit}
        />
    </View>
);
}

const styles = StyleSheet.create({
    container: { padding: 30, justifyContent: "center", flex: 1 },
    title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
    input: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10 },
    error: { color: "red", textAlign: "center" },
    passwordContainer: { flexDirection: "row", alignItems: "center" },
    toggle: { marginLeft: 10 },
});
