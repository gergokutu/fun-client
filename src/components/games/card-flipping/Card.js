import React from 'react'
import PropTypes from 'prop-types'

import '../../../styling/cards.css'

export default function Card(
  {
    handleClick, 
    id, 
    type,
    flipped, 
    solved,
    height, 
    width,
    disabled
  }) {
   return <div
    className={`flip-container ${flipped ? 'flipped' : ''}`}
    style={
      { 
        width, 
        height 
      }
    }
    onClick={() => disabled ? null : handleClick(id)}
  >
    <div className='flipper'>
      <img 
        className='flipping-game-card'
        alt='movie star or poster'
        style={
          { 
            width, 
            height 
          }
        }
        src={flipped || solved ? type : 'https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/f7/67/20/f767203f-009e-9bba-30b8-c8b3856ea5a5/source/512x512bb.jpg'}
      />
    </div>
  </div>
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired
}