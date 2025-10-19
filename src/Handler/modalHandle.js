// Importamos importamos el service de modales
import { modales } from '../Services/modalService';

export function ModalHandle({ activo, onClose }){
    const ModalComponente = modales[activo];
    return ModalComponente ? <ModalComponente onClose={onClose} /> : null;
}