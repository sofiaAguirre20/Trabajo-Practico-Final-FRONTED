import React, { useState } from 'react'
import './HomePageContacts.css'
import { getContactList } from '../../services/contactServices'
import ContactsList from '../ContactsList/ContactsList'
import { Route, Routes } from 'react-router'


const HomePageContacts = () => {
    const contacts = getContactList()

    
    
    return (
        <div className='home-page-container'>
            <section className='icons-container'>

            </section>
            <section className='contacts-container'>
                <div className='header-chat'>
                    <div className='header_logo-menu'>
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

                    <div className='search-container'>
                        <div className='search-icon'><i className="bi bi-search"></i></div>
                        <input className='search-input' type="text" placeholder='Buscar un chat o iniciar uno nuevo' />
                    </div>

                    <div className='buttons-header'>
                        <button className='button_all-chats'>Todos</button>
                        <button className='button_unread'>No leídos</button>
                        <button className='button_favorites'>Favoritos</button>
                        <button className='button_groups'>Grupos</button>
                    </div>
                </div>
                <div className='chats-panel'>
                    <ContactsList contacts={contacts}/>
                </div>
            </section>
            
            <section className='img-container' >

            </section>
        </div>
    )
}

export default HomePageContacts