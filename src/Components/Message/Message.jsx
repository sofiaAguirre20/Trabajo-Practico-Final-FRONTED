import React from 'react'

const Message = ({emisor, hora, id, texto, status}) => {
    return(
      <section className='chat-container'>
        <div className='text-time-container'>
          <p className='text'>{texto}</p>
          <span className='time'>{hora}</span>
        </div>
        
      </section>
    )
}

export default Message