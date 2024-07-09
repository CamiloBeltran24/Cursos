// Para retornar mas de un elemento HTML podemos encapsular esos elementos HTML dentro
// de la etiqueta React.Fragment o en su debido caso la sintaxis <></>

// export const FirstApp = () => {
//     return (
//         <React.Fragment>
//             <h1>First App</h1>
//             <h2> Esto es un subtitulo h2</h2>
//         </React.Fragment>
//     )
// }

const greeting = ( nombre ) => {
    return `Hola ${nombre}`
}


const newMessage = 'Esto es el mensaje enviado desde la variable'

const JsonMessage = {
    message: 'Hola desde un objeto JSON',
    title: 'Christian Camilo'
}

// para colocar varaibles dentro de react se usa la sintaxis {} y dentro de ellos 
// cualquier tipo de expresion JS excepto un objeto, no podemos enviar objetos

export const FirstApp = () => {
    return (
        <>
            {/* Colocar el valor de retorno de una funcion */}
            <h1> { greeting(JsonMessage.title) } </h1>
            <h2> { newMessage } </h2>
            {/* Podemos enviar atributos de un objeto pero no el objeto en si. */}
            <p> { JsonMessage.message } { JsonMessage.title } </p>
            {/* Para insertar el objeto como un string */}
            <p> { JSON.stringify( JsonMessage ) }</p>
        </>
    )
}