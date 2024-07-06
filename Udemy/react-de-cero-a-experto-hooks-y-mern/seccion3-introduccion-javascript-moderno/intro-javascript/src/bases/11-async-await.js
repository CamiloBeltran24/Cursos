// ASYNC - AWAY




const getImagenPromesa = () => {
    const promesa = new Promise( (resolve, reject ) => {
        resolve('https://asdfasdf.com');
    })

    return promesa;
}


getImagenPromesa()
    .then( console.log )




const getImagen = async() => {

    try { // Para manejar errores en funciones async utilizamos try catch

        const API_KEY = 'b2niNO6mLP7izOfU6vrYV3XDOxmYBUAo';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
        const { data } = await resp.json();

        const imageUrl = data.images.original.url;

        const img = document.createElement('img');
        img.src = imageUrl;

        document.body.appendChild(img)

        console.log(  imageUrl );

    } catch (error) {
        console.error( error )
    }
}

getImagen();
