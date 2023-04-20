import React from 'react'
import { BeatLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <BeatLoader color="#36d7b7" />
    </div>
  )
}

export default Loading
