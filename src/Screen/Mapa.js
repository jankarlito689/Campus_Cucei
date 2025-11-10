import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Boton } from '../Componetes/boton';
import { MapaContent } from '../Componetes/mapaContent';
//Importamos la zona interactiva
import { ModalHandle } from '../Handler/modalHandle';

export function Mapa({ onBack }) {
  // Estado que guarda qué módulo está activo
  const [activo, setActivo] = useState(null);
  return (
    <View style={styles.screen}>
      <Text style={styles.titulo}>Mapa</Text>
      <Boton 
        title='Volver a menu'
        color='#115688ff'
        onPress={onBack}
      />
      <MapaContent setActivo={setActivo} />
      <ModalHandle activo={activo} onClose={() => setActivo(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    backgroundColor:"#f3f4f6",
    alignItems: "center",
    paddingVertical: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 10,
    textAlign: "center",
    letterSpacing: 0.5,
  },
});