import React from 'react'
import './InicioChats.css'

const InicioChats = () =>{
    return(
        <div className='home-page-container'>
            <section className='icons-container'>

            </section>
            <section className='chats-container'>
                <div className='header-chat'>
                    <span className='logo'>WhatsApp</span>
                    <div className='new-chat-menu-container'>
                        <div className='button-chat'>
                            <i className="bi bi-envelope-plus" title='Nuevo Chat'></i>
                        </div>
                       <span className='button-menu'>
                        <i className="bi bi-three-dots-vertical" title='Menú'></i>
                        </span> 
                    </div>
                </div>
            </section>
            <section className='img-container'>

            </section>
        </div>
    )
}

export default InicioChats