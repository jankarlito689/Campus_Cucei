import { AlumnoLayout } from "../layout/Usuario/alumnoLayout";
import { useAuth } from "../Hooks/useAuth";

export function AlumnoScreen({onBack}){
    const { user } = useAuth();

    return(
        <AlumnoLayout user={user} onBack={onBack}/>
    )
}