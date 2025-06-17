async function obtenerData(){
    try{
        let response = await fetch('https://rickandmortyapi.com/api/character');
        let data = await response.json();
        console.log(data);
        
    } catch ( error ){
        console.log(error);
        
    }
}

obtenerData();

// FOR AWAIT OF
const urls = [
    'https://rickandmortyapi.com/api/character',
    'https://rickandmortyapi.com/api/location',
    'https://rickandmortyapi.com/api/episode',
];

async function fetchNewData(params) {
    try {
        for await (let url of urls){
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
        }
    } catch (error) {
        
    }
}