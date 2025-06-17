import { useState } from "react"


const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false); // isActive es una variable de estado que indica si el botón está activo o no. Comienza en false (apagado).

    return(
        <>
            <button onClick={() => setIsActive( !isActive ) }> {/* Al hacer clic en el botón, se invierte el valor de isActive. */}
                {isActive ? "Encendido 👾" : "Apagado 💀"} {/* Muestra "Encendido" si isActive es true, de lo contrario muestra "Apagado". */}
            </button>
        </>
    )
}

export default ToggleButton; // Exportamos el componente ToggleButton para que pueda ser utilizado en otros archivos.
// ToggleButton es un componente que permite alternar entre dos estados (encendido y apagado) al hacer clic en un botón.