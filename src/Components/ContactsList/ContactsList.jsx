import React from 'react'
import ContactItem from '../ContactItem/ContactItem'


const ContactsList = ({contacts}) =>{
    const list_contacts = contacts.map(
        (contact)=>{
            return(
                <ContactItem key={contact.id} contact = {contact}/>
            )
    })

    return(
        list_contacts
    )
}

export default ContactsList