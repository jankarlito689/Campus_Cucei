import { useState } from "react";
import { LoginLayout } from "../layout/Usuario/loginLayout";
import { useAuth } from "../Hooks/useAuth";

//Funcion que renderiza el layout 
export function LoginScreen(){
    //Estados de los campos
    const [codigo, setCodigo] = useState("");
    const [nip, setNip] = useState("");

    //Usamos las funciones de autenticacion
    const { signIn, loading, error } = useAuth();

    //handle de ejecucion
    const handleLogin = async () => {
        if(!codigo || !nip){
            alert("Por favor ingresar tu codigo y nip");
            return;
        }
        await signIn(codigo, nip);
    }
    return(
        <LoginLayout
            codigo={codigo}
            nip={nip}
            onCodigoChange={setCodigo}
            onPasswordChange={setNip}
            onSubmit={handleLogin}
            error={error}
            disabled={loading}
        />
    )
}