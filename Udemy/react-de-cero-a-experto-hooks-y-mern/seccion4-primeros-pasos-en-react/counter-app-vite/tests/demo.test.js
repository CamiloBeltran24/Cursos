
describe('Pruebas en <DemoComponent/>', () => { 

    test('Esta prueba no deberia fallar', () => {
        // if( 0 === 0 ) {
        //     throw new Error('NO PUEDE DIVIDIR ENTRE CERO');
        // }
        
    
        // 1. Inicializacion
        const message1 = 'Hola Mundo ';
    
        // 2. Estimulo
        const message2 = message1.trim();
    
        //3. Observar el comportamiento...esperado
        expect( message1 ).toBe( message2 ) // -> expect es una funcion propia de jest, con toBe validamos que dos variables sean iguales, es como hacer un  if message1 === message2
    })
})
