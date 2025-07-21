import { useState } from 'react'
import HomePageContacts from './Components/HomePageContacts/HomePageContacts'
import { Route, Routes } from 'react-router'
import MessagesScreen from './Screens/MessagesScreen/MessagesScreen'
import ContactItem from './Components/ContactItem/ContactItem'



function App() {

  return (
      <div>
        <Routes>
            <Route
              path='/'
              element={<HomePageContacts/>}
            />
            <Route
            path='/' element={<ContactItem/>}
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
