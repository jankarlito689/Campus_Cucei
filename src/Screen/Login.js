import { useState } from "react";
import { LoginLayout } from "../layout/Usuario/Auth/loginLayout";
import { useAuth } from "../Hooks/useAuth";

//Funcion que renderiza el layout 
export function LoginScreen({onSuccess, onBack}) {
    //Estados de los campos
    const [codigo, setCodigo] = useState("");
    const [nip, setNip] = useState("");

    //Usamos las funciones de autenticacion
    const { signIn, loading, error, user } = useAuth();

    //handle de ejecucion
    const handleLogin = async () => {
        //Agregamos validacion
        if(!codigo.trim() && !nip.trim()){
            alert("Por favor ingresar tu codigo y nip");
            return;
        }
        if(!codigo.trim()){
            alert("El campo codigo no puede estar vacio.");
            return;
        }
        if(!nip.trim()){
            alert("El campo NIP no puede estar vacio.");
            return;
        }
        const success = await signIn(codigo, nip);
        if(success || user){
            onSuccess?.();
        }
    }
    return(
        <LoginLayout
            codigo={codigo}
            nip={nip}
            onCodigoChange={setCodigo}
            onPasswordChange={setNip}
            onSubmit={handleLogin}
            onBack={onBack}
            error={error}
            disabled={loading}
        />
    )
}