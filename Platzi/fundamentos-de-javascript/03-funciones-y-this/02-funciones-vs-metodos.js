// Capacidades que tienen las funciones al igualque otros objetos

// 1. Pasar funciones como argumentos -> Callback

function a(){}
function b(a){}

b(a);

// 2. Retornar funciones

function a(){

    function b(){
    }

    return b
}

// 3. Asignar funciones a variables -> Expresion de funcion

const a = function(){

}

// 4. Tener propiedades y metodos

function a () {}
const obj = {}
a.call(obj) // -> le indica que su contexto de ejecucion es un objeto ! es decir como si fuese un metodo de un objeto.

// 5. Anidar Funciones -> Nested Functions

function a () {
    function b (){
        function c () {

        }
        c();
    }
    b();
}
a();

// 6. funciones en objetos

const rocket = {
    name: "Falcon 9",
    message: "Launch Sucess",
    launchMessage: function(){
        console.log(this.message);
    }
}

rocket.launchMessage();




