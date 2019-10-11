import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styling/navbar.css'

class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <h1 className='navbar-title'>Movies for all!</h1>
        {/* order changed because of styling */}
        <Link to='/games/card-flipping'><span className='navbar-element'>Games</span></Link>
        <Link to='/'><span className='navbar-element'>Home</span></Link>
      </div>
    )
  }
}

export default NavBar