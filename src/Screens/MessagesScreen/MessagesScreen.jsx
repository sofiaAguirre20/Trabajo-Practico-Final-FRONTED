import React, { useEffect, useState } from 'react'
import MessageList from '../../Components/MessageList/MessageList'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactServices'
import '../../Components/Message/Message.css'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import MessageHeader from '../../Components/MessageHeader/MessageHeader'



const MessagesScreen = () => {

    const { contact_id } = useParams();




    const contact_selected = getContactById(contact_id)
    const [contactData, setContactData] = useState(contact_selected)
    const [messages, setMessages] = useState(contact_selected.messages)



    useEffect(
        () => {

            setMessages(contact_selected.messages)
            setContactData(contact_selected)

        }, [contact_id])



    const deleteMessageById = (message_id) => {
        const filteredMessages = messages.filter((message) => message.id !== message_id)

        setMessages(filteredMessages)
    }

    const addNewMessage = (text) => {
        const fechaActual = new Date();
        const hour = fechaActual.getHours();
        const minutes = fechaActual.getMinutes();
        const new_message = {
            emisor: 'YO',
            hora: [`${hour}:${minutes}`],
            texto: text,
            status: 'no-visto',
            id: messages.length + 1
        }

        setMessages([...messages, new_message])
    }





    return (

        <div className='chat-container'>
            <MessageHeader contactData={contactData} />
            <MessageList messages={messages} deleteMessageById={deleteMessageById} />
            <NewMessageForm addNewMessage={addNewMessage} setMessages={setMessages} />


        </div>



    )
}

export default MessagesScreen