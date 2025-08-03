import React from 'react'
import './NewMessageForm.css'
import ICONS from '../../Constants/Icons'
import DeleteAllMessages from '../DeleteAllMessages/DeleteAllMessages'


const NewMessageForm = ({ addNewMessage, setMessages }) => {

  const handleSubmitSendMessageForm = (event) => {
    event.preventDefault()
    let new_message_text = event.target.message.value 
    if(!new_message_text) return
    addNewMessage(new_message_text)
    event.target.message.value = ''

  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {

      console.log('Se presionó Enter');
    }
  };


  return (
    <div className='message-footer'>
      <form onSubmit={handleSubmitSendMessageForm}>
        <div className='write-message-container' >
          <label htmlFor='message' className='label-write-message'>Escribe mensaje:</label>
          <input type='text' onKeyDown={handleKeyDown} placeholder='Escribe un mensaje' id='message' name='message' autoComplete='off'/>
          <DeleteAllMessages setMessages={setMessages}/>
          <button type='submit' className='button-send-message-container' title='Enviar mensaje' ><ICONS.sendMessage className='button-send-message' /></button>
        </div>
        
      </form>
    </div>


  )
}

export default NewMessageForm