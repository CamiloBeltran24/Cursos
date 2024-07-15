import { useContext } from "../../src/base-pruebas/06-deses-obj";

describe('Test de 06-deses-obj.js', () => {
    test('UseContext retorna un objeto', () => {

        const user = useContext({ clave: 'Cambel', nombre: 'Christian', edad: 30 });

        expect( user ).toStrictEqual({
            nombreClave: 'Cambel',
            nombre: 'Christian',
            anios: 30,
            rango: 'Capitán',
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })

    })
})