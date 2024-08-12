import { SearchItem } from '@/types'
import React from 'react'

const CompanyCard = ({item}: {item: SearchItem}) => {
  return (
    <div>CompanyCard{item.id}</div>
  )
}

export default CompanyCard