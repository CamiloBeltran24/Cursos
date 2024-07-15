import { getUser } from "../../src/base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Esta es la prueba de 05-funciones.js', () => {
    test('getUser Debe retorar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        console.log(user);

        expect( testUser ).toEqual( user )

    });



    test('getUsuarioActivo Retorna un objeto', () => {
        const name = 'Christian';


        const usuario = getUsuarioActivo(name)

        expect( usuario ).toEqual( {
            uid: 'ABC567',
            username: name
        } )
    })
})