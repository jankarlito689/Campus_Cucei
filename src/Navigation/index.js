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
    Alumno: "alumno",
    Login: "login",
}

export function Navigation(){
    const { user, signOut } = useAuth();
    const [route, setRoute] = useState(Routes.Menu)

    // VERIFICA que data sea un objeto y no contenga strings problemáticos
    //console.log("Datos de login:", user);
    switch (route){
        case Routes.Menu:
            return <MenuScreen onNavigate={setRoute}/>
        case Routes.Mapa:
            return <Mapa onBack={() => setRoute(Routes.Menu)} />
        case Routes.Alumno:
            if (!user){
                return(
                    <LoginScreen
                        onSuccess={() => setRoute(Routes.Alumno)}
                        onBack={() => setRoute(Routes.Menu)}
                    />
                );
            }
            return <AlumnoScreen onBack={() => setRoute(Routes.Menu)}  onLogout={signOut}/>
        case Routes.Login:
            return(
                <LoginScreen 
                    onSuccess={() => setRoute(Routes.Menu)}
                    onBack={() => setRoute(Routes.Menu)}
                />
            )
        default:
            return <MenuScreen onNavigate={setRoute} />
    }
}