import React, { useState } from 'react'
import MessageList from '../../Components/MessageList/MessageList'
import { Link, NavLink, useParams } from 'react-router'
import { getContactById } from '../../services/contactServices'
import '../../Components/Message/Message.css'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'

const MessagesScreen =()=>{
    
    const {contact_id} = useParams()

	
	const contact_selected = getContactById(contact_id)

	
    const [messages, setMessages] = useState(contact_selected.messages)

    const deleteMessageById = (message_id) => {
        const new_message_list = []
        for(const message of messages){
            if(message.id !== message_id){
                new_message_list.push(message)
            }
        }

        setMessages(new_message_list)
    }

    const addNewMessage = (text) => {
		
		const new_mesage = {
			emisor: 'YO',
			hora: '11:10', //Investigar acerca de Date.
			texto: text,
			status: 'no-visto',
			id: messages.length + 1
		}
		//Clonar la lista de mensajes (Porque: El clon al ser otra variable PERO NO UN ESTADO si lo vamos a poder mutar)
		const cloned_messages_list = [...messages]
		//Este push es valido porque no estamos mutando en estado 'messages' sino mas bien el clon de ese estado
		cloned_messages_list.push(new_mesage)
		setMessages(cloned_messages_list)
	}

    
    return(
        <div className='chat-container'>
           
            <h1>Mensajes</h1>
            <MessageList messages = {messages}/>
            {/*<button onClick = {() => deleteMessageById(1)}>Eliminar Mensaje</button>*/}
            <NewMessageForm addNewMessage={addNewMessage}/>
           
           
        </div>
        
    )
}

export default MessagesScreen