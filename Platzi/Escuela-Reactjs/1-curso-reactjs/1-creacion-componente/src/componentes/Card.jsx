const Card = ({title, description}) => {
    return(
        <section>
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    );
}

export default Card; // Esta linea es necesaria para que el componente Card sea exportado y pueda ser utilizado en otros archivos.