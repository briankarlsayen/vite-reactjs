import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Room from './Room'
import Chat from './Chat'
import Navbar from './Navbar'
import ShowOut from './ShoutOut'
import { UserContext } from '../UserContext'
function Main() {
  const[ user, setUser ] = useState(null)
  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
        <Navbar />
        <Routes>
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/shoutout" element={<ShowOut />} />
          <Route path="/" element={<Room />} />
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default Main
