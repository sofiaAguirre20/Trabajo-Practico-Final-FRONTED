import React, {useState} from 'react'
import ContactsList from '../../Components/ContactsList/ContactsList'
import { getContactList } from '../../services/contactServices'


const ContactScreen = () => {

  const contacts = getContactList()
    
    
  return (
    <div>
        <div><ContactsList contacts={contacts}/></div>
    </div>
  )
}

export default ContactScreen