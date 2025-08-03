import React, { useState } from 'react'
import Message from '../Message/Message'
import './MessageList.css'
import NewMessageForm from '../NewMessageForm/NewMessageForm'
import AnyMessage from '../AnyMessage/AnyMessage'

const MessageList = ({ messages, deleteMessageById }) => {

/*
  if (messages.length === 0) {
   return(<AnyMessage/>)

  }
  */

  const lista_mensajes = messages.map(
    (message) => {
      return (

        <Message
          key={message.id}
          emisor={message.emisor}
          hora={message.hora}
          id={message.id}
          texto={message.texto}
          status={message.status}
          deleteMessageById={deleteMessageById}
        />
      )
    })

  return (
    <div className='message-body'>
      { messages.length === 0 ? <AnyMessage/> : lista_mensajes}
    </div>
  )
}

export default MessageList