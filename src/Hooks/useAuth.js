import { AuthContext } from "../Handler/Auth/authProvider";
import { useContext } from "react";
//Hook para acceder al contexto
export const useAuth = () => useContext(AuthContext)