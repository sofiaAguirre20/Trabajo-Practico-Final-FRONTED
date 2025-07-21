import React from 'react'
import ContactItem from '../ContactItem/ContactItem'


const ContactsList = ({contacts, setShowWhappImg}) =>{
    const list_contacts = contacts.map(
        (contact)=>{
            return(
                <ContactItem key={contact.id} contact = {contact} setShowWhappImg={setShowWhappImg}/>
            )
    })

    return(
        list_contacts
    )
}

export default ContactsList