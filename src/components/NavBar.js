import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <Link to='/'><span className='navbar-element'>Home</span></Link>
        <Link to='/games'><span>Games</span></Link>
      </div>
    )
  }
}

export default NavBar