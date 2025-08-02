import React from 'react'
import ContactScreen from '../ContactScreen/ContactScreen'
import './SideBarContacts.css'
import ICONS from '../../Constants/Icons'
import FilteredContact from '../../Components/FilteredContact/FilteredContact'



const SideBarContacts = () => {

   
  
      return (
        <div className='chats-panel'>
              <div>
                <h2 className='logo'>WhatsApp</h2>
              </div>
              <FilteredContact/>
              <ContactScreen/>

              
        </div>
    )
  
  
}

export default SideBarContacts