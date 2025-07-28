import React,{useState} from 'react'
import Message from '../Message/Message'
import './MessageList.css'
import NewMessageForm from '../NewMessageForm/NewMessageForm'

const MessageList = ({messages, deleteMessageById}) =>{
  
  
  // if(messages.length === 0){
  //   return(
  //     <section>
  //       <span className='noMessages'>No tienes mensajes</span>
       
  //     </section>
  //   )
     
  // }

  const lista_mensajes = messages.map(
    (message) => {
      return(
        
          <Message 
              key = {message.id}
              emisor = {message.emisor} 
              hora = {message.hora} 
              id = {message.id} 
              texto = {message.texto} 
              status={message.status}
              deleteMessageById = {deleteMessageById}
          />  
      )
  })

  return (lista_mensajes)
}

export default MessageList