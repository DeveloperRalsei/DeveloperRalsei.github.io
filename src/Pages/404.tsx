import React from 'react'

interface Props{
  message: string
}

const Err404: React.FC<Props> = ({ message }) => {
  return (
    <div>{message}</div>
  )
}

export default Err404