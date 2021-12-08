import React, {useState, useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {UserContext} from '../UserContext'
import io from 'socket.io-client'
let socket

function Chat() {
  const ENDPT = 'localhost:5000'
  const {id} = useParams()
  const {user, setUser} = useContext(UserContext)
  useEffect(() =>{
    socket = io(ENDPT)
    socket.emit('join', {name: user.name, room_id: id, user_id:user.id})
  }, [])
  

  const [messages, setMessages] = useState([
    {
      userId: "00001",
      text: "hello"
    },
    {
      userId: "00002",
      text: "yow"
    }
  ])

  // const [user, setUser] = useState({
  //   userId: "00001",
  //   name: "Budoy"
  // })

  const [messageText, setMessageText] = useState('')

  const sendFormHandler = (e) => {
    e.preventDefault()
    let newMsgArr = [...messages]
    const newMsg = {
      userId: 'budoy',
      text: messageText
    }
    newMsgArr.push(newMsg)
    setMessages(newMsgArr)
    setMessageText('')
  }

  const messageForm = () => {
    return(
      <div className="row" style={{paddingTop: '10px'}}>
        <form onSubmit={sendFormHandler} className="col s12">
          <div className="row">
            <div className="input-field col s10">
              <input  value={messageText} onChange={(e) => setMessageText(e.target.value)}type="text"/>
            </div>
            <button className="btn-large waves-effect waves-light" type="submit" name="action">Submit</button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="chat whiteSpace">
      <h1>Hi {user ? user.name : "Budoy"}</h1>
      <div className="chat__box">
        {messages && messages.map((message, index) => {
          return(
            <div key={index} style={{display: "flex", alignItems: "center"}}>
              <p style={{marginRight: "5px", fontWeight: 600}}>user:</p>
              <p>{message.text}</p>
            </div>
          )})
        }
      </div>
      <div className="chatSubmit">
        {messageForm()}
      </div>
    </div>
  )
}

export default Chat
