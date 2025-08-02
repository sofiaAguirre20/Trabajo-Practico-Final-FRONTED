import React, {useState} from 'react'
import ContactsList from '../../Components/ContactsList/ContactsList'
import { getContactList } from '../../services/contactServices'


const ContactScreen = () => {

  const contacts = getContactList()
    
    
  return (
    
      <div><ContactsList contacts={contacts}/></div>
    
  )
}

export default ContactScreen