import React from 'react'
import {useParams} from 'react-router-dom'

function Chat() {
  const params = useParams()
  console.log(params.id)
  return (
    <div>
      <h1>This is the chat</h1>
    </div>
  )
}

export default Chat
