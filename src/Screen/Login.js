import { useState } from "react";
import { LoginLayout } from "../layout/Usuario/loginLayout";
import { useAuth } from "../Hooks/useAuth";

//Funcion que renderiza el layout 
export function LoginScreen(){
    //Estados de los campos
    const [codigo, setCodigo] = useState("");
    const [nip, setNip] = useState("");
    const [error, setError] = useState("");

    //Usamos las funciones de autenticacion
    const { signIn } = useAuth();

    //handle de ejecucion
    const handleLogin = async () => {
        setError("");
        if(!codigo || !nip){
            setError("Por favor ingresar tu codigo y nip");
            return;
        }
        try{
            await signIn(codigo, nip); //Se conecta con el servidor de cucei
        }catch(err){
            setError(err.message || "Error al iniciarl sesion");
        }
    }
    return(
        <LoginLayout
            codigo={codigo}
            nip={nip}
            onCodigoChange={setCodigo}
            onPasswordChange={setNip}
            onSubmit={handleLogin}
            error={error}
        />
    )
}