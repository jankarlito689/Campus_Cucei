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
        if (!raw || typeof raw !== "object" || !raw.codigo){
            throw new Error("Credenciales invalidas");
        }
        return raw;
    } catch (error){
        console.error(" Error en login:", error);
         // Captura errores específicos y lanza mensaje legible
        if (error.message.includes("timeout")) {
        throw new Error("Tiempo de espera agotado. Verifica tu conexión.");
        } else if (error.raw?.status === 401) {
        throw new Error("Código o NIP incorrectos.");
        } else if (error.raw?.status >= 500) {
        throw new Error("Error en el servidor. Intenta más tarde.");
        } else {
        throw new Error(error.message || "Error desconocido al iniciar sesión.");
        }
    }
}