import { SearchItem } from '@/types'
import React from 'react'

const KeywordCard = ({item}: {item: SearchItem}) => {
  return (
    <div>KeywordCard{item.id}</div>
  )
}

export default KeywordCard