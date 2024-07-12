import { getSaludo } from "../../src/base-pruebas/02-template-string.js";


describe('Pruebas en el archivo 02-template-string', () => {
    test('getSaludo debe retornar Hola Christian', () => {

        const name = 'Christian';
        const message = getSaludo( name );


        expect( message ).toBe(`Hola ${name}`)

    })
})