import { useAuth } from "../Hooks/useAuth";
import { useState } from "react";
import { LoginScreen } from "../Screen/Login";
import { Mapa } from "../Screen/Mapa";
import { MenuScreen } from "../Screen/Menu";

export function Navigation(){
    const { user, signOut } = useAuth();
    const [route, setRoute] = useState("menu")

    if (!user){
        return <LoginScreen/>
    }
    console.log("✅ Usuario autenticado:", user);
    switch (route){
        case "menu":
            return <MenuScreen onNavigate={setRoute} onLogout={signOut}/>
        case "mapa":
            return <Mapa onBack={() => setRoute("menu")} />
        default:
            return <MenuScreen onNavigate={setRoute} onLogout={signOut}/>
    }
}