import MAPA from "./Screen/Mapa";
import { useEffect } from "react";
import { login } from "./Services/Auth/authService";

export default function App() {
  useEffect (() => {
    (async () =>{
      try{
        const data = await login("423037742", "cesar110");
        console.log("Usuario autenticado:", data);
      } catch (error){
        console.log("Error:", error.message)
      }
    })();
  }, [])
  return (
    <MAPA />
  );
}

