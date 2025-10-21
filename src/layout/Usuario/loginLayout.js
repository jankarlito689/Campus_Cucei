//layout de login
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Boton } from "../../Componetes/boton";

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
});
