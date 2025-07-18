import React from 'react'
import '../HomePageContacts/HomePageContacts.css'
import { Link } from 'react-router';

const ContactItem = ({contact}) =>{

    return(
        <div className='contact'>
            <div className='name-contact-container'> 
                <span>{contact.name}</span>
            </div>
            <div className='profile-photo-container'>
                <img src = {contact.avatar} className='profile-photo'/>
            </div>
            
            
        </div>
    )
}

export default ContactItem