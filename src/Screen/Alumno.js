import { AlumnoLayout } from "../layout/Usuario/alumnoLayout";
import { useAuth } from "../Hooks/useAuth";

export function AlumnoScreen(){
    const { user } = useAuth();

    return(
        <AlumnoLayout user={user}/>
    )
}