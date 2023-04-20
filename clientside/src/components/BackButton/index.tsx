import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export interface BackButtonProps {
  url: string
}

const BackButton = ({ url }: BackButtonProps) => {
  return (
    <Link
      to={url}
      className="bg-white p-2 top-5 left-5 rounded-lg fixed shadow-lg"
    >
      <IoIosArrowBack />
    </Link>
  )
}

export default BackButton
