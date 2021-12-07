import React from 'react'
import {useNavigate} from 'react-router-dom'
function Room() {
  const navigate = useNavigate()
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

  return (
    <div className="row">
    <div className="col s6 ">
      <h1>This is the room.</h1>
    </div>
    <div className="col s6">
      {roomArr.map(room => (
          <div key={room.roomId} className="card-panel teal" onClick={() => navigate(`/chat/${room.roomId}`)}>
            <span className="white-text">{room.title}
            </span>
          </div>
        
      ))}
    </div>
  </div>
  )
}

export default Room
