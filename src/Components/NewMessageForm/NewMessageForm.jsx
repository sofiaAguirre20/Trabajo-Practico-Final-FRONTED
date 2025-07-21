import React from 'react'
import './NewMessageForm.css'

const NewMessageForm = ({addNewMessage}) => {

    const handleSubmitSendMessageForm = (event) =>{
        event.preventDefault()
        let new_message_text = event.target.message.value //event.target referencia al elemento del cual proviene el evento /message referencia al atributo name= 'message'del input /value referencia al valor que tenga el input al enviar el formulario
        addNewMessage(new_message_text)
        event.target.message.value = ''

    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        // Aquí puedes ejecutar la lógica deseada cuando se presiona Enter
        console.log('Se presionó Enter');
      }
  };

  return (
    <form onSubmit={handleSubmitSendMessageForm}>
              <div className='write-message-container'>
                <label htmlFor='message' className='label-write-message'>Escribe mensaje:</label>
                <input type='text' onKeyDown={handleKeyDown} placeholder='Escribe un mensaje' id='message' name='message' required />  
                
              </div> 
              {/* <button type='submit'>Enviar mensaje</button> */}
    </form> 
          
  )
}

export default NewMessageForm