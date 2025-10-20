//handle que se conectata con el servicio para obtner el usuario
import { createContext,useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../../Services/Auth/authService";

//Creamos la funcion para el contexto global de app
export const AuthContext = createContext();

//Proveedor del contexto
export function AuthProvider({ children }){
    const [user, setUser] = useState(null);

    //Inicia sesion y gurada los datos de usuario
    async function signIn( codigo, nip) {
        const data = await login(codigo, nip);
        setUser(data);
        await AsyncStorage.setItem("userData", JSON.stringify(data))
    }

    //Cerrar sesió y borra la informacion
    async function signOut() {
        setUser(null);
        await AsyncStorage.removeItem("userData")
    }

    //Cargar sesion almacenada
    useEffect(() =>{
        const loadUser = async () =>{
            const stored = await AsyncStorage.getItem("userData")
            if(stored) setUser(JSON.parse(stored));
        }
        loadUser();
    }, []);
    return(
        <AuthContext.Provider value={{user, signIn,signOut}}>
            {children}
        </AuthContext.Provider>
    )
}