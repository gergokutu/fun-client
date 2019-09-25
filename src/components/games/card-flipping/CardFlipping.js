import React, { useState, useEffect } from 'react'
import Board from './Board'
import initializeDeck from './deck'

import '../../../styling/cardflipping.css'

export default function CardFlipping() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
  }, [])

  useEffect(() => {
    preloadImages()
  }, cards)

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)
    // when unmounts
    return () => window.removeEventListener('resize', resizeListener)
  })

  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    } else {
      if (sameCardClicked(flipped, id)) return
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 2000)
      }
    }
  }

  const preloadImages = () => {
    cards.map(card => {
      const src = card.type
      new Image().src = src
    })
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const sameCardClicked = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find(card => card.id === id)
    const flippedCard = cards.find(card => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type && flippedCard.id !== clickedCard.id
  }

  const resizeBoard = () => {
    // set the dimension to the smallest dim of the canvas
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    ))
  }

  const restartGame = () => {
    setSolved([])
    setCards(initializeDeck())
  }

  return (
    <div className='flipping-game-body'>
      <h1 className='flipping-game-title'>Flip the movies!</h1>
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
      <div className='restart'>
        <span className='button' onClick={restartGame}>Restart</span>
      </div>
    </div>
  )
}


