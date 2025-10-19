import axios from "axios";

//Creamos la funcion para conectarse al api de cucei
export const apiCucei = axios.create({
    baseURL:"https://cuceimobile.space/campusCucei/",
    timeout: 10000,
    headers: { "Content-Type": "application/json"},
});