import React, { useEffect, useState } from 'react'
import MessageList from '../../Components/MessageList/MessageList'
import { Link, NavLink, useParams } from 'react-router'
import { getContactById } from '../../services/contactServices'
import '../../Components/Message/Message.css'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import SideBarContacts from '../SideBarContacts/SideBarContacts'

const MessagesScreen =()=>{
    
    const {contact_id} = useParams()

	
	const contact_selected = getContactById(contact_id)

	
    const [messages, setMessages] = useState([])
    useEffect(
        ()=>{
            setMessages(contact_selected.messages)
        },[contact_id])

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
		 const fechaActual = new Date();
        const hour = fechaActual.getHours();
        const minutes = fechaActual.getMinutes();
		const new_mesage = {
			emisor: 'YO',
			hora: [hour,minutes], 
			texto: text,
			status: 'no-visto',
			id: messages.length + 1
		}
		
		const cloned_messages_list = [...messages]
		
		cloned_messages_list.push(new_mesage)
		setMessages(cloned_messages_list)
	}

    
    return(
        <div className='chat-container'>
           
            
            {
                setMessages && <MessageList messages = {messages} deleteMessageById={deleteMessageById}/> 
                

            }
           
            {/*<button onClick = {() => deleteMessageById(1)}>Eliminar Mensaje</button>*/}
             <NewMessageForm addNewMessage={addNewMessage}/>
        
           
        </div>
        
    )
}

export default MessagesScreen