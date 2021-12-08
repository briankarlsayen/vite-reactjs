import React, {useContext, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {UserContext} from '../UserContext'
import io from 'socket.io-client'
let socket;

function Room() {
  const ENDPT = 'localhost:5000'
  const {user, setUser} = useContext(UserContext)
  const [room, setRoom] = useState('')
  const navigate = useNavigate()
  
  useEffect(() => {
    socket = io(ENDPT)
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [ENDPT])

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('create-room', room)
    console.log(room)
    setRoom('')
  }

  const setAsBudoy = () => {
    setUser({
      id: "0001",
      name: "Budoy"
    })
  }
  
  const setAsBuday = () => {
    setUser({
      id: "0002",
      name: "Buday"
    })
  }
  
  const roomArr = [
    {
      roomId: "001",
      title: "Room01",
    },
    {
      roomId: "002",
      title: "Room02",
    },
    {
      roomId: "003",
      title: "Room03",
    }
  ]

  const roomForm = () => {
    return(
      <div className="row" style={{paddingTop: '10px'}}>
        <form onSubmit={handleSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s10">
              <input  value={room} onChange={(e) => setRoom(e.target.value)}type="text"/>
            </div>
            <button className="btn-large waves-effect waves-light" type="submit" name="action">Submit</button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="row whiteSpace">
    <div className="col s6">
      <h1>This is the room.</h1>
      {roomForm()}
      <button onClick={setAsBudoy}>Set as Budoy</button>
      <button onClick={setAsBuday}>Set as Buday</button>
    </div>
    <div className="col s6">
      {roomArr.map(room => (
          <div key={room.roomId} className="card-panel teal roomCard" onClick={() => navigate(`/chat/${room.roomId}`)}>
            <span className="white-text">{room.title}
            </span>
          </div>
        
      ))}
    </div>
  </div>
  )
}

export default Room
