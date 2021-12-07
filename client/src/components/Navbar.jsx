import React from 'react'

function Navbar() {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/chat">Chat</a></li>
        <li><a href="/shoutout">Shoutout</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
