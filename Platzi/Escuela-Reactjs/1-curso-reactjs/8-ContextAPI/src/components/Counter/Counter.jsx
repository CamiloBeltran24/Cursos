import { createContext } from "react"
import { useReducer } from "react"


const reducer = (state, action) =>{
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
    
        default:
        
            break;
    }
}



const Counter = () =>{
    const [ state, dispatch ] = useReducer(reducer, { count: 0 })

    return(
        <>
            <p>contador: { state.count }</p>
            <button
                onClick={() => dispatch({ type: "increment" }) }
            > Incrementar </button>
            <button
                onClick={() => dispatch({ type: "decrement" }) }
            >Decrementar</button>
        </>
    )
}

export default Counter