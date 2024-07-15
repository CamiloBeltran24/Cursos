
export const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {

    return {
        nombreClave: clave,
        anios: edad,
        nombre: nombre,
        rango: rango,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}



