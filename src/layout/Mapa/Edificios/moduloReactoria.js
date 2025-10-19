//Componete Reactoria
import{Modal,Text,StyleSheet,ScrollView, View} from "react-native";
import { Boton } from "../../../Componetes/boton";
import { CardDescripcion } from "../../../Componetes/Cards/cardDescripcion";
import { CarruselImg } from "../../../Componetes/Carruseles/carruselesImg";
//Creamos la funcion principal del componete
export function ModuloRectoria({onClose}){
    return(
    <Modal animationType="slide" transparent={true} visible={true}>
        <View style= {style.centeredView}>
            <View style={style.modalView}>
                <Text style={style.modalText}>Rectoria</Text>

                <ScrollView style={style.scroll}>
                        {/* Carrusel de img */}
                    <CarruselImg
                        imagenes={[
                            require("../../../../assets/Img/Edificios/Rectoria/rectoria3.jpg"),
                            require("../../../../assets/Img/Edificios/Rectoria/rectoria4.jpg"),
                            require("../../../../assets/Img/Edificios/Rectoria/rectoria2.jpg"),
                        ]}
                    />
                        {/*Texto descriptivo del modulo */}
                    <CardDescripcion>
                        La rectoria del centro Universitario es el edificio principal donde se encuentran las oficinas administrativas y de direccion del CUCEI. 
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