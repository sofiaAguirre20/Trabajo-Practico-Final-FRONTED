import React from 'react'
import ContactItem from '../ContactItem/ContactItem'


const ContactsList = ({ contacts }) => {
        console.log(contacts)
        return (
            <div>
                {contacts.map((contact) => (
                    <ContactItem key={contact.id} contact={contact} />
                ))}
            </div>
        )
    }

export default ContactsList