const StaticComponent = () => {
    const items = ["Manzana", "Durazno", "Pera"] // Estos son los datos estaticos

    return(
        <>
        <ul>
            {
                items.map( ( item, index ) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
        </>
    )
}

export default StaticComponent