import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Prueba de 07-deses-arr',() => {
    test('Debe retornar un string y un numero', () => {

        const miArreglo = retornaArreglo();

        expect(miArreglo[0]).toBe('ABC');
        expect(miArreglo[1]).toBe(123);

        expect( typeof miArreglo[0] ).toBe('string');
        expect( typeof miArreglo[1] ).toBe('number');


        //expect.any(String) significa "Cualquier string", puede usarse para cualquier tipo de dato
        expect( miArreglo[0] ).toEqual( expect.any(String));

    })
})