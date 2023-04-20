import React from 'react'
import BackButton from '../../components/BackButton'

const NotFound = () => {
  return (
    <div className="h-screen grid place-content-center">
      <BackButton url="/" />
      <p>NotFound</p>
    </div>
  )
}

export default NotFound
