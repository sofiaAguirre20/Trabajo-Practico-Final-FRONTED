import React, { useState } from 'react'
import ContactScreen from '../ContactScreen/ContactScreen'
import './SideBarContacts.css'
import FilteredContact from '../../Components/FilteredContact/FilteredContact'
import { getContactList } from '../../services/contactServices'


const SideBarContacts = () => {

  const contacts_list = getContactList();

  const [contacts, setContacts] = useState(contacts_list);
  
      return (
        <div className='chats-panel'>
              <div>
                <h2 className='logo'>WhatsApp</h2>
              </div>
              <FilteredContact/>
              <ContactScreen contacts={contacts} />

              
        </div>
    )
  
  
}

export default SideBarContacts