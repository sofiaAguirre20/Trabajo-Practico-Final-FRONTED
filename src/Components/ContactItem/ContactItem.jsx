import React from 'react'
import '../HomePageContacts/HomePageContacts.css'
import { Link } from 'react-router';

const ContactItem = ({contact}) =>{

    return(
        <Link to = {`/contact/${contact.id}/messages`} className='contact'>
            <div className='name-contact-container'> 
                <span>{contact.name}</span>
            </div>
            <div className='profile-photo-container'>
                <img src = {contact.avatar} className='profile-photo'/>
            </div>
        </Link>
    )
}

export default ContactItem