import React, { useEffect } from 'react'

export interface SoldProgressProps {
  sold: number
  total: number
}

const SoldProgress = ({ sold, total }: SoldProgressProps) => {
  useEffect(() => {
    const element = document.getElementById('sold')
    if (element !== null) element.style.width = computeSoldPercentage() + '%'
  }, [document.getElementById('sold')])

  const computeSoldPercentage = () => {
    return (sold * 100) / total
  }
  
  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div
        id="sold"
        className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
      >
        {sold} sold
      </div>
    </div>
  )
}

export default SoldProgress
