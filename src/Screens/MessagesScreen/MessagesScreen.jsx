import React, { useEffect, useState } from 'react'
import MessageList from '../../Components/MessageList/MessageList'
import { Link, NavLink, useParams } from 'react-router'
import { getContactById } from '../../services/contactServices'
import '../../Components/Message/Message.css'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import SideBarContacts from '../SideBarContacts/SideBarContacts'
import MessageHeader from '../../Components/MessageHeader/MessageHeader'

const MessagesScreen = () => {

    const { contact_id } = useParams();

    

    
    const contact_selected = getContactById(contact_id)
    


   // const [messages, setMessages] = useState(contact_selected.messages)
    const [contactData,setContactData] = useState(contact_selected)

    
    useEffect(
        () => {
            
          //  setMessages(contact_selected.messages)
           setContactData(contact_selected)

        }, [contact_id])



    const deleteMessageById = (message_id) => {
        const new_message_list = []
        for (const message of contactData.messages) {
            if (message.id !== message_id) {
                new_message_list.push(message)
            }
        }

        const _contactData = { ...contactData, messages: new_message_list }

        setContactData(_contactData)
    }

    const addNewMessage = (text) => {
        const fechaActual = new Date();
        const hour = fechaActual.getHours();
        const minutes = fechaActual.getMinutes();
        const new_mesage = {
            emisor: 'YO',
            hora: [`${hour}:${minutes}`],
            texto: text,
            status: 'no-visto',
            id: messages.length + 1
        }

        const cloned_messages_list = [...contactData.messages]

        cloned_messages_list.push(new_mesage);

        const _contactData = { ...contactData, messages: cloned_messages_list }
        setContactData(_contactData)
    }


    return (
        
            <div className='chat-container'>
                <MessageHeader contactData =  {contactData}/>
                {
                    setContactData && <MessageList messages={contactData.messages} deleteMessageById={deleteMessageById} />


                }

                <NewMessageForm addNewMessage={addNewMessage} />


            </div>
        


    )
}

export default MessagesScreen