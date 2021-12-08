const express = require('express')
const app = express()
const mongoose = require('mongoose')
const http = require('http').createServer(app)
const PORT = process.env.PORT || 5000
const {addUser} = require('./helper')
const io = require("socket.io")(http, {
  cors: {
    origin: '*',
  }
})

// io.on("connection", socket => {
//   console.log(socket.id)
//   socket.on('send-message', (message, room) => {
//     if(room === "") {
//       socket.broadcast.emit('receive-message', message)
//     } else {
//       socket.to(room).emit('receive-message', message)
//     }
//   })
//   socket.on('join-room', room => {
//     socket.join(room)
//   })
// })

io.on('connection', (socket) => {
  console.log(socket.id)
  socket.on('create-room', (name) => {
    console.log('The room name received is ', name)
  })
  socket.on('join', ({name, room_id, user_id}) => {
    const {error, user} = addUser({
      socket_id: socket.id,
      name,
      room_id,
      user_id
    })
    if(error) {
      console.log('join error', error)
    } else {
      console.log('join user', user)
    }
  })
})

http.listen(PORT, () => {
  console.log(`listening to port ${PORT}`)
})