import React from 'react'
import ContactScreen from '../ContactScreen/ContactScreen'
import './SideBarContacts.css'
import ICONS from '../../Constants/Icons'



const SideBarContacts = () => {

   
  
      return (
        <div className='chats-panel'>
              <div>
                <h2 className='logo'>WhatsApp</h2>
              </div>
             
              <ContactScreen/>

              
        </div>
    )
  
  
}

export default SideBarContacts