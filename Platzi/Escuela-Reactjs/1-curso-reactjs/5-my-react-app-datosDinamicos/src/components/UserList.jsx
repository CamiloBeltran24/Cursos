import { useState } from "react";
import { useEffect } from "react"

const UserList = () => {

    const [ users, setUsers ] = useState([])

    useEffect( () =>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then( (response) => response.json())
            .then( data => setUsers(data) )
            .catch( error => console.log(`Error fetching data: ${error}`))
    },[])


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

export default UserList;