//handle que se conectata con el servicio para obtner el usuario
import { createContext,useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../../Services/Auth/authService";

//Creamos la funcion para el contexto global de app
export const AuthContext = createContext();

//Proveedor del contexto
export function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null)

    //Inicia sesion y gurada los datos de usuario
    async function signIn( codigo, nip) {
        try{
            setError(null);
            setLoading(true);

            const data = await login(codigo, nip);
            if(!data || typeof data !== "object"){
                throw new Error("Los datos de usuario no son válidos.")
            }
            
            setUser(data);
            await AsyncStorage.setItem("userData", JSON.stringify(data))
            console.log("✅ Sesion iniciada correctamente.", data.nombre);
        }catch(error){
            console.error("Error en signIn:", error);
            setError(error.message || "Error al iniciar sesion");
        }finally{
            setLoading(false);
        }
    }

    //Cerrar sesió y borra la informacion
    async function signOut() {
        try{
            await AsyncStorage.removeItem("userData");
            setUser(null);
            console.log("Sesion cerrada correctamente.");
        }catch(error){
            console.error("Error cerrando sesion:", error);
        }
    }

    //Cargar sesion almacenada
    useEffect(() =>{
        const loadUser = async () =>{
            try{
                const stored = await AsyncStorage.getItem("userData")
                if(stored){
                    try{
                        const userData = JSON.parse(stored);
                        setUser(userData);
                        console.log("Datos cargados:", userData.nombre);
                    }catch{
                        console.warn("⚠️ Datos corruptos eliminados de AsyncStorage")
                        await AsyncStorage.removeItem("userData");
                    }
                }
            }catch (error){
                console.error("Error cargando usuario:", error);
            }finally{
                setLoading(false);
            }
        }
        loadUser();
    }, []);
    return(
        <AuthContext.Provider value={{user, signIn,signOut, loading, error}}>
            {children}
        </AuthContext.Provider>
    )
}