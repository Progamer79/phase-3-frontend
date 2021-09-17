import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function RateMovie(id) {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

     }

  return (
    <div className='App'>
      <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
    </div>
  )
}