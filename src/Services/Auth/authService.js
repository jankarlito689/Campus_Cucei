import { apiCucei } from "../Api/apiCucei";

export async function login(codigo, nip) {
    try{
        const response = await apiCucei.get("auth.php",{
            params:{ codigo,nip}
        })
        return response.data;
    } catch (error){
        if(error.response){
            //Error dek servidor 
            throw new Error(error.response.data.message || "Error de autenticacion")
        }else if (error.request){
            //Error de red
            throw new Error("NO se pude conectar al servidor")
        }else{
            throw new Error("Error interno en la aplicacion")
        }
    }
}