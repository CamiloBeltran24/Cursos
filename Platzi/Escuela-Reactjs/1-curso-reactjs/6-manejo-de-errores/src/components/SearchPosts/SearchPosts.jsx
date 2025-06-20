import { use } from "react";
import { useState, useEffect } from "react"

const SearchPosts = () => {

    const [ query, setQuery ] = useState("");
    const [ posts, setPost ] = useState([]);
    const [ error, setError ] = useState(null);

    useEffect( () => {



        const fetPosts = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`);

                if( !response.ok ) {
                    throw new Error("Error al obtener los datos.")
                }

                const data = await response.json()
                setPost(data)
            } catch (error) {
                setError(error)
            }
        }
        fetPosts();
    },[query])
    
    return(
        <>
        <div>
            <h1>POSTS</h1>

            <input 
                type="text"
                placeholder="Buscar por titulo"
                value={query}
                onChange={( event ) => setQuery(event.target.value)}
            />
            <ul>
                { posts.map( (post, index) => (
                    <li key={index}>{ post.title }</li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default SearchPosts