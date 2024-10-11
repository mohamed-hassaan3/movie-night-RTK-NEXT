import { TopPeople } from '@/types'
import React from 'react'

const TopPeopleCard = ({person}: {person: TopPeople}) => {
  return (
    <div>{person.id}
    <div>{person.known_for.map((item) => (
        <p key={item.id} className='text-red-200'>{item.id}</p>
    ))}</div> </div>
  )
}

export default TopPeopleCard