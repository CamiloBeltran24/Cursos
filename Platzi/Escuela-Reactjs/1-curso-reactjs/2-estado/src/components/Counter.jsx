import { useState } from "react"
import { useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0); // Count es una variable de estado que comienza en 0 y SetCount es la función para actualizarla.
    return(
        <>
        <div>

            <h1>Counter Component</h1>
            <p>Count: {count}</p>

            <button onClick={() => setCount(
                count - 1 // Al hacer clic en este botón, se disminuye el valor de count en 1.
            )}>Disminuir</button>
            <button onClick={() => setCount(
                count + 1
            )}>Incrementar</button>

            <button onClick={() => setCount(0)}>Reiniciar</button>

        </div>
        </>
    )
}

export default Counter; // Exportamos el componente Counter para que pueda ser utilizado en otros archivos.