import { useAuth } from "../Hooks/useAuth";
import { useState } from "react";
import { LoginScreen } from "../Screen/Login";
import { Mapa } from "../Screen/Mapa";
import { MenuScreen } from "../Screen/Menu";
import { AlumnoScreen } from "../Screen/Alumno";

//rutas que va a usar Navigate
const Routes ={
    Menu: "menu",
    Mapa: "mapa",
    Alumno: "alumno"
}

export function Navigation(){
    const { user, signOut } = useAuth();
    const [route, setRoute] = useState(Routes.Menu)

    if (!user){
        return <LoginScreen/>
    }
    console.log("✅ Usuario autenticado:", user);
    switch (route){
        case Routes.Menu:
            return <MenuScreen onNavigate={setRoute} onLogout={signOut}/>
        case Routes.Mapa:
            return <Mapa onBack={() => setRoute(Routes.Menu)} />
        case Routes.Alumno:
            return <AlumnoScreen onBack={() => setRoute(Routes.Menu)} />
        default:
            return <MenuScreen onNavigate={setRoute} onLogout={signOut}/>
    }
}