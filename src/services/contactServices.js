const img = document.createElement('img');

const contacts = [
    {
        id:1,
        name: 'Bob',
        description: 'yo esponja',
        avatar: img.src = '../../images/bob.png',
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
                emisor: 'OTRO',
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
        avatar: img.src = '../../images/arenita.png',
        last_connection: 'now',
        connection_status: 'online',
        messages:[
          
            
        ]
    },
    {
        id:3,
        name: 'Patricio',
        description: 'yo patricio',
        avatar: img.src = '../../images/pat.png',
        last_connection: '15:25',
        connection_status: 'offline',
        messages:[
            {
                emisor: 'OTRO',
                hora: '23:10',
                id: 1,
                texto: 'Hola, tanto tiempo!!',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:10',
                id: 3,
                texto: 'Como has estado?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:10',
                id: 4,
                texto: 'Siempre me pregunte que ha sido de ti',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:14',
                id: 5,
                texto: 'Ey!!. Si la verdad, paso mucho!',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:15',
                id: 6,
                texto: 'Todo tranquilo, ya me recibí y ahora ya estoy trabajando',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:15',
                id: 7,
                texto: 'Vos que me contas?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:17',
                id: 8,
                texto: 'Por ahora estoy sin empleo',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:17',
                id: 9,
                texto: 'Estuve buscando pero aun nada',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:17',
                id: 10,
                texto: 'Espero tener suerte',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:20',
                id: 11,
                texto: 'Si seguro',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:20',
                id: 12,
                texto: 'Yo confio que si',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:20',
                id: 13,
                texto: 'Arriba ese ánimo!!',
                status: 'visto'
            }
        ]
    },
     {
        id:4,
        name: 'Señor Cangrejo',
        description: 'yo Cangrejo',
        avatar: img.src = '../../images/cangrejo.png',
        last_connection: 'now',
        connection_status: 'online',
        messages:[
           {
                emisor: 'YO',
                hora: '10:29',
                id: 1,
                texto: 'No te olvides de llevar la coca',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '11:11',
                id: 2,
                texto: 'si si',
                status: 'visto'
            },
           
            
        ]
    },
     {
        id:5,
        name: 'Calamardo',
        description: 'yo Calamardo',
        avatar: img.src = '../../images/calamardo.png',
        last_connection: 'now',
        connection_status: 'online',
        messages:[
           {
                emisor: 'OTRO',
                hora: '15:16',
                id: 1,
                texto: 'Ya completaste el formulario?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '16:30',
                id: 2,
                texto: 'Sip',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '16:30',
                id: 3,
                texto: 'Vos?',
                status: 'no visto'
            },
           
            
        ]
    },
     {
        id:6,
        name: 'Plankton',
        description: 'yo Plankton',
        avatar: img.src = '../../images/plankton.png',
        last_connection: 'now',
        connection_status: 'online',
        messages:[
           {
                emisor: 'OTRO',
                hora: '18:10',
                id: 1,
                texto: 'Esta noche ire a bucar la receta secreta de la cangreburger. JAJAJAJA (risa malvada)',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '18:10',
                id: 2,
                texto: 'Me acompañas? ;)',
                status: 'visto'
            }
               
           
            
        ]
    },
];

export const getContactList = () =>{
    return contacts
}

export const getContactById = (contact_id) =>{

    const contact_selected = contacts.filter((contact) => contact.id === Number(contact_id))[0]

    return contact_selected
}

