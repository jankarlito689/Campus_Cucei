import { AlumnoLayout } from "../layout/Usuario/alumnoLayout";
import { useAuth } from "../Hooks/useAuth";

export function AlumnoScreen({onBack, onLogout}){
    const { user } = useAuth();

    return(
        <AlumnoLayout user={user} onBack={onBack} onLogout={onLogout}/>
    )
}