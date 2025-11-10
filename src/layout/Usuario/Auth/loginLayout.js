import { View, Text, TextInput, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import { Boton } from "../../../Componetes/boton";
import { useState } from "react";

export function LoginLayout({
  codigo,
  nip,
  onCodigoChange,
  onPasswordChange,
  onSubmit,
  error,
  disabled = false,
  onBack,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.title}>Campus CUCEI</Text>
        <Text style={styles.subtitle}>Iniciar sesión</Text>
      </View>

      {/* Campo de código */}
      <TextInput
        style={[styles.input, disabled && styles.disabledInput]}
        placeholder="Código de alumno"
        value={codigo}
        onChangeText={onCodigoChange}
        editable={!disabled}
        keyboardType="numeric"
        autoCapitalize="none"
      />

      {/* Campo de contraseña */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }, disabled && styles.disabledInput]}
          placeholder="NIP del alumno"
          secureTextEntry={!showPassword}
          value={nip}
          onChangeText={onPasswordChange}
          editable={!disabled}
          autoCapitalize="none"
        />
        <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.toggle}>
          <Text style={styles.toggleText}>
            {showPassword ? "Ocultar" : "Ver"}
          </Text>
        </Pressable>
      </View>

      {/* Error visual */}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/* Botón de acción */}
      <View style={styles.buttonContainer}>
        <Boton
          title={disabled ? "Conectando..." : "Entrar"}
          color="#115688"
          onPress={!disabled ? onSubmit : null}
          disabled={disabled}
        />
      </View>
      {/* Botón de regreso */}
      <View style={styles.buttonContainer}>
        <Boton
          title={"Regresar al menú"}
          color="#af0a0dff"
          onPress={onBack}
        />
      </View>

      {/* Indicador de carga opcional */}
      {disabled && (
        <View style={{ marginTop: 15, alignItems: "center" }}>
          <ActivityIndicator size="small" color="#115688" />
          <Text style={{ color: "#115688", marginTop: 5 }}>Verificando credenciales...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#f4f6f8",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#115688",
  },
  subtitle: {
    fontSize: 18,
    color: "#475569",
    marginTop: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  disabledInput: {
    opacity: 0.6,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  toggle: {
    marginLeft: 10,
    paddingHorizontal: 8,
  },
  toggleText: {
    color: "#115688",
    fontWeight: "bold",
  },
  error: {
    color: "#ef4444",
    textAlign: "center",
    marginBottom: 12,
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

