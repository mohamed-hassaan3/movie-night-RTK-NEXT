import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Trailer = () => {
  return (
    <div className='flex items-center gap-2 cursor-pointer hover:opacity-90 active:opacity-90 font-bold text-lg'>
        <FaPlay />
        <span>Play trailer</span>
    </div>
  )
}

export default Trailer