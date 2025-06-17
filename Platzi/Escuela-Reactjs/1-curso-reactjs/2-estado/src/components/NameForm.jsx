import { useState } from 'react';


const NameForm = ({ onSubmit }) => {
    const [name, setName] = useState(''); // definimos el valor inicial de name como una cadena vacía

    return (
        <>
            <form action="">
                <div>
                    <input placeholder='Escribe Algo aqui' type="text" onChange={ (event) => setName( event.target.value ) } />
                    <p>{name}</p>
                </div>
            </form>
        </>
    )
}

export default NameForm;