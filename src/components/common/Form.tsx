"use client"
import React from 'react'

const Form = ({children, className, ...rest}: Form) => {
  return (
    <form
      className={className}
      {...rest}
    >
      {children}
    </form>
  )
}

export default Form