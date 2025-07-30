import React from 'react'
import './Message.css'
import ICONS from '../../Constants/Icons'

const Message = ({emisor, hora, id, texto, status,deleteMessageById}) => {

  let message_container_class = 'message-container'

  if(emisor === 'YO'){
    message_container_class += ' my-message'
  }else{
    message_container_class += ' other-message'
  }
    return(
      // <section className='chat-container'>
      //   <div className='text-time-container'>

      //     <p className='text'>{texto}</p>
      //     <span className='time'>{hora}</span>
          
      //   </div>
      //   <button onClick={() => {deleteMessageById(id)}} className='button-deleteMessage'><ICONS.DeleteContact className='button-delete'/></button>
      // </section>
       
       <div className={message_container_class}>
       
         <div className='message'>
          <span className='text'>{texto}</span>
          <span className='time'>{hora}</span>
          
      
        {/* <button onClick={() => {deleteMessageById(id)}} className='button-deleteMessage'><ICONS.DeleteContact className='button-delete'/></button> */}
       </div>
      </div>
    )
}

export default Message