import React from 'react'
import { BsClockFill } from 'react-icons/bs'

export interface ActiveHoursProps {
  open: string
  close: string
}

const ActiveHours = ({ open, close }: ActiveHoursProps) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="p-2 bg-red-200 rounded-full">
        <BsClockFill className="text-xs text-red-500" />
      </div>
      <p>
        {open} - {close}
      </p>
    </div>
  )
}

export default ActiveHours
