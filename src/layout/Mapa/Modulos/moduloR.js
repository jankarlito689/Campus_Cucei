//Modulo R
import{Modal,Text,StyleSheet,ScrollView, View} from "react-native";
import { Boton } from "../../../Componetes/boton";
import { CardDescripcion } from "../../../Componetes/Cards/cardDescripcion";
import { CarruselImg } from "../../../Componetes/Carruseles/carruselesImg";

//Creamos la funcion principal del layout
export function ModuloR({onClose}){
    return(
    <Modal animationType="slide" transparent={true} visible={true}>
        <View style= {style.centeredView}>
            <View style={style.modalView}>
                <Text style={style.modalText}>Modulo R</Text>

                <ScrollView style={style.scroll}>
                            {/* Carrusel de img */}
                    <CarruselImg
                        imagenes={[
                            require("../../../../assets/Img/Modulos/ModuloR/modulor.jpg"),
                            require("../../../../assets/Img/Modulos/ModuloR/modulor2.jpg"),
                        ]}
                    />
                        {/*Texto descriptivo del modulo */}
                    <CardDescripcion>
                        El Modulo R es un modulo donde se imparte gran variedad de materias.
                    </CardDescripcion>
                        {/* Boton */}
                    <Boton title="Cerrar" onPress={onClose} color="#2196f3"/>
                </ScrollView>
            </View>
        </View>
    </Modal>
    )
}

const style = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        transform: [{rotate: "90deg"}],
    },
    modalView:{
        backgroundColor: "white",
        borderRadius: 24,
        padding: 25,
        alignItems: "center",
        elevation: 5,
        width: 700,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
    modalText: {
        marginBottom: 20,
        fontSize: 22,
        fontWeight: "700",
        color: "#1f2937",
        textAlign: "center",
    },
    scroll: {
        width: "85%",
        maxHeight: 370,
    },
});