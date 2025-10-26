import { apiCucei } from "../Api/apiCucei";

export async function login(codigo, nip) {
    try{
        const response = await apiCucei.get("auth.php",{
            params:{ codigo,nip}
        })
        let raw = response.data;
        //separamos el json
        if(typeof raw === "string"){
            const parts = raw.split("}{");
            if(parts.length === 2){
                raw = JSON.parse(parts[0] + "}")//primer objeto
                const extra = JSON.parse("{"+ parts[1]) //segundo objeto
                raw ={ ...raw, ...extra};
            }else{
                raw = JSON.parts(raw)
            }
        }
        //console.log("🔍 Respuesta completa del servidor:", raw);
        //validamos la informacion que nos llega
        if (!raw || !raw.codigo){
            throw new Error("Credenciales invalidas");
        }
        return raw;
    } catch (error){
        if(error.message && !error.response && !error.request){
            throw error;
        }
        if(error.response){
            //Error dek servidor 
            throw new Error(error.response.data.message || "Error de autenticacion")
        }else if (error.request){
            //Error de red
            throw new Error("NO se pude conectar al servidor")
        }else{
            throw new Error("Error interno del app")
        }
    }
}