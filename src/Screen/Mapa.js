import { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Boton } from '../Componetes/boton';
import { useAuth } from '../Hooks/useAuth';
//Importamos la zona interactiva
import { ZonaInteractiva } from '../Componetes/zonaInteractiva';
import { ModalHandle } from '../Handler/modalHandle';
import { zonas } from '../Services/zonaService';

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
      {/* CONTENEDOR DEL MAPA */}
      <View style={styles.mapContainer}>
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
  mapContainer: {
    borderRadius: 20,
    width: 550,
    //aspectRatio: 8 / 8,
    height: 650,
    position: "relative", // necesario para usar absolute en las zonas
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4},
    shadowOpacity:0.2,
    shadowRadius:8,
    elevation: 5,
    backgroundColor: "#fff",
  },
  map: {
    width: 590,
    height: 650,
    transform: [{ rotate: "90deg" }], // rota el mapa si tu imagen lo necesita
    borderRadius: 20,
    resizeMode: "contain",
  },

  zonePressed:{
    backgroundColor: "rgba(0,0,0,0,.15)",
  },
});

