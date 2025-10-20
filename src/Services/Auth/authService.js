import { apiCucei } from "../Api/apiCucei";

export async function login(codigo, nip) {
    try{
        const response = await apiCucei.get("auth.php",{
            params:{ codigo,nip}
        })
        const data = response.data;
        //validamos la informacion que nos llega
        if (data.message || !data.codigo){
            throw new Error(data.message || "Credenciales invalidas");
        }
        return data;
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