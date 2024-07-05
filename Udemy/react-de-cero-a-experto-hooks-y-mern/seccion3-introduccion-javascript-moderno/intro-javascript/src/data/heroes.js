
export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// Exportacion por defecto

// export default [
//     {
//         id: 1,
//         name: 'Robin',
//         owner: 'DC'
//     },
//     {
//         id: 2,
//         name: 'Capitan America',
//         owner: 'Marvel'
//     },
//     {
//         id: 3,
//         name: 'Linterna Verde',
//         owner: 'DC'
//     },
//     {
//         id: 4,
//         name: 'Cyborg',
//         owner: 'DC'
//     },
//     {
//         id: 5,
//         name: 'Hulk',
//         owner: 'Marvel'
//     }, 
// ]


// OTRA FORMA de hacer Exportaciones por defecto

const new_heroes =  [
        {
            id: 1,
            name: 'Robin',
            owner: 'DC'
        },
        {
            id: 2,
            name: 'Capitan America',
            owner: 'Marvel'
        },
        {
            id: 3,
            name: 'Linterna Verde',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Cyborg',
            owner: 'DC'
        },
        {
            id: 5,
            name: 'Hulk',
            owner: 'Marvel'
        }, 
    ]

    // Podemos hacer una exportacion por defecto haciendo uso de esta sintaxis al final del elemento a exportar
export default new_heroes;


export const owners = [
    {
        id: 1,
        name: 'DC'
    },
    {
        id: 2,
        name: 'Marvel'
    }
]