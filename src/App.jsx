import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
 import MessagesScreen from './Screens/MessagesScreen/MessagesScreen'
 import ContactItem from './Components/ContactItem/ContactItem'
import NoContactSelected from './Screens/NoContactSelected/NoContactSelected'
import SideBarContacts from './Screens/SideBarContacts/SideBarContacts'




function App() {
 
  return (
      <div className='container'>
          <SideBarContacts/> 
          
          
         
         <Routes>
            
            <Route
              path='/'
              element={ <NoContactSelected/>}
            />
            <Route
            path='/MessageScreen' element={<ContactItem/>}
            
            />
            <Route
              path='/contact/:contact_id/messages' 
              element={<MessagesScreen/>}
            />
            

        </Routes> 
        
      </div>
       
  )
}

export default App
