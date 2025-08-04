import React from 'react'
import './DeleteAllMessages.css'
import ICONS from '../../Constants/Icons'


const DeleteAllMessages = ({ setMessages }) => {
    const deleteAllMessages = () => {
        setMessages([])
    }
    return (
        <button className='button-delete-all-messages' onClick={deleteAllMessages}><ICONS.deleteAllMessages className='icon-delete-all-messages' title='Eliminar todos los mensajes' /></button>
    )

}

export default DeleteAllMessages