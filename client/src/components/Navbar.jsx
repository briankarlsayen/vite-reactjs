import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav>
    <div className="nav-wrapper whiteSpace">
        <Link to="/">
          Logo
        </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/chat">
            Chat
          </Link>
        </li>
        <li>
          <Link to="/shoutout">
            Shout Out
          </Link>
        </li>
        <li>
          <Link to="/">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
