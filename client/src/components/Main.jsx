import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Room from './Room'
import Chat from './Chat'
import Navbar from './Navbar'
import ShowOut from './ShoutOut'

function Main() {
  console.log('main')
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/shoutout" element={<ShowOut />} />
        <Route path="/" element={<Room />} />
      </Routes>
    </div>
  )
}

export default Main
