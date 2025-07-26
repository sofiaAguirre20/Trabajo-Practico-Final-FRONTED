import React from 'react'
import './Message.css'
import ICONS from '../../Constants/Icons'

const Message = ({emisor, hora, id, texto, status,deleteMessageById}) => {
    return(
      <section className='chat-container'>
        <div className='text-time-container'>
          <p className='text'>{texto}</p>
          <span className='time'>{hora}</span>
          
        </div>
        <button onClick={() => {deleteMessageById(id)}} className='button-deleteMessage'><ICONS.DeleteContact className='button-delete'/></button>
      </section>
    )
}

export default Message