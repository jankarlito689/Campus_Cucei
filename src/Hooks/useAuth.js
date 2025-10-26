import { AuthContext } from "../Handler/Auth/authProvider";
import { useContext } from "react";
//Hook para acceder al contexto
export const useAuth = () => {
    const ctx = useContext(AuthContext);
    //console.log("Contexto:", ctx)
    return ctx;
}