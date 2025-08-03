import React, {useState} from 'react'
import ContactsList from '../../Components/ContactsList/ContactsList'



const ContactScreen = ({ contacts }) => {
    
  return (
    
        <ContactsList contacts={contacts}/>
    
  )
}

export default ContactScreen