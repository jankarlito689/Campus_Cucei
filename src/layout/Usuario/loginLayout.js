//layout de login
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
export function LoginLayout({ codigo, nip, onCodigoChange, onPasswordChange, onSubmit, error }) {
return (
    <View style={styles.container}>
        <Text style={styles.title}>Iniciar sesión</Text>
        <TextInput
            style={styles.input}
            placeholder="Código de alumno"
            value={codigo}
            onChangeText={onCodigoChange}
        />
        <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={nip}
            onChangeText={onPasswordChange}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Pressable style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
    </View>
);
}

const styles = StyleSheet.create({
    container: { padding: 30, justifyContent: "center", flex: 1 },
    title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
    input: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10 },
    button: { backgroundColor: "#2563eb", padding: 12, borderRadius: 8 },
    buttonText: { color: "white", textAlign: "center", fontWeight: "bold" },
    error: { color: "red", textAlign: "center" },
});
