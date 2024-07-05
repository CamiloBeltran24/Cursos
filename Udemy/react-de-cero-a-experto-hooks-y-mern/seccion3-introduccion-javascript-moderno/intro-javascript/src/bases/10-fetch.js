// FETCH API
const API_KEY = 'b2niNO6mLP7izOfU6vrYV3XDOxmYBUAo';
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

// peticion.then( ( resp ) => {
//     resp.json().then( data => console.log(data))  // Obtener una promesa dentro de otra promesa
// })
// .catch( console.warn );


// ENCADENAR PROMESAS
peticion
    .then( ( resp ) =>  resp.json()
    .then( ({ data }) => {  // SEGUNDA promesa, la primera retorna una nueva promesa
        const imageUrl = data.images.original.url;

        const img = document.createElement('img');
        img.src = imageUrl;

        document.body.appendChild(img);
    })
)
.catch( console.warn );