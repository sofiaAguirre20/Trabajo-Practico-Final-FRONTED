import React from 'react'
import Message from '../Message/Message'

const MessageList = ({messages}) =>{
  console.log(messages)
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
        />
      )
  })

  return (lista_mensajes)
}

export default MessageList