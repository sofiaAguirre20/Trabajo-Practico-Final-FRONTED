const contacts = [
    {
        id:1,
        name: 'Bob Esponja',
        description: 'yo esponja',
        avatar: 'https://media.revistagq.com/photos/5ca5f6a77a3aec0df5496c59/master/w_1600,c_limit/bob_esponja_9564.png',
        last_connection: '15:23',
        connection_status: 'offline',
        messages:[
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'EL',
                hora: '23:11',
                id: 2,
                texto: 'Todo bien, vos?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Todo bien',
                status: 'visto'
            }
        ]
    },
    {
        id:2,
        name: 'Arenita',
        description: 'yo arenita',
        avatar: 'https://i.pinimg.com/736x/45/c4/d0/45c4d0f51f99e2a4700ce6ee3a72f635.jpg',
        last_connection: 'now',
        connection_status: 'online',
        messages:[
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Wenasss',
                status: 'visto'
            },
            {
                emisor: 'ELLA',
                hora: '23:11',
                id: 2,
                texto: 'Buenaassss',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Como estas?',
                status: 'visto'
            }
        ]
    },
    {
        id:3,
        name: 'Patricio',
        description: 'yo patricio',
        avatar: 'https://imagenes.heraldo.es/files/image_990_556/uploads/imagenes/2020/08/11/la-estrella-de-mar-patricio-sera-el-protagonista-del-spin-of-de-bob-esponja.jpeg',
        last_connection: '15:25',
        connection_status: 'offline',
        messages:[
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Holisss',
                status: 'visto'
            },
            {
                emisor: 'EL',
                hora: '23:11',
                id: 2,
                texto: 'holuu',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Que onda?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 4,
                texto: 'Que onda?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 5,
                texto: 'Que onda?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 6,
                texto: 'Que onda?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 7,
                texto: 'Que onda?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 8,
                texto: 'Que onda?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 9,
                texto: 'Que onda?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 10,
                texto: 'Que onda?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 11,
                texto: 'Que onda?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 12,
                texto: 'Que onda?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 13,
                texto: 'Que onda?',
                status: 'visto'
            }
        ]
    }
];

export const getContactList = () =>{
    return contacts
}

export const getContactById = (contact_id) =>{

    for(const contact of contacts){
        if(Number(contact.id) === Number(contact_id)){
            return contact
        }
    }

    return null
}

