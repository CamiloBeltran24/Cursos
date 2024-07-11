// para importar las proptypes
// las proptypes ya vienen instalas de create-react-app pero no en vite
import propTypes from 'prop-types';

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



export const FirstApp = ( { title, subTitle } ) => {

    // console.log( props );

    return (
        <>
            {/* // para colocar varaibles dentro de react se usa la sintaxis {} y dentro de ellos
            // cualquier tipo de expresion JS excepto un objeto, no podemos enviar objetos */}

            {/* Colocar el valor de retorno de una funcion */}
            {/* <h1> { greeting(JsonMessage.title) } </h1> */}
            {/* <h2> { newMessage } </h2> */}
            {/* Podemos enviar atributos de un objeto pero no el objeto en si. */}
            {/* <p> { JsonMessage.message } { JsonMessage.title } </p> */}
            {/* Para insertar el objeto como un string */}
            {/* <p> { JSON.stringify( JsonMessage ) }</p> */}

            <h1>{ title }</h1>
            <p>{ subTitle }</p>
        </>
    )
}


// Utilizar Prop-types
// npm install prop-types

// las proptypes nos ayudan a definir el tipo de dato que estamos esperando en la prop-types
// podemos tambien definir si un proptype es requerido o obligatorio.
FirstApp.propTypes = {
    title: propTypes.string.isRequired,
    subTitle: propTypes.string
}


// DefaultProps

FirstApp.defaultProps = {
    title: 'No hay Titulo',
    subTitle: 'No hay subtitulo',
    name: 'Christian Beltran'
}