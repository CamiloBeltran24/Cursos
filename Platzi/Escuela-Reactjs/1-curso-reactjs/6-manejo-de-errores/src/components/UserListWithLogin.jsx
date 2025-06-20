import { useState, useEffect } from "react";

const UserListWithLoading = () => {

    const [ users, setUsers ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState(null)


    useEffect( () =>{
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if( !response.ok ) {
                    throw new Error("Error al obtener los datos.")
                }

                const data = await response.json()
                setUsers(data)

            } catch (error) {
                setError(error);
                console.log(`Error: ${error.message}`)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    },[])

    if( isLoading ) {
        return <p>Cargando...</p>
    }

    if( error ) {
        return <p>Error: {error.message}</p>
    }


    return(
        <>
            <h1>Lista de Usuarios</h1>
            {
                users.map( user => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </>
    )
}

export default UserListWithLoading;