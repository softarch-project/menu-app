import React, { useEffect, useState } from 'react'

export interface PriceBreakdownProps {
  fullPrice: number
  discountedPercent: number
  isDiscountActive: boolean
}

const PriceBreakdown = ({
  fullPrice,
  discountedPercent,
  isDiscountActive,
}: PriceBreakdownProps) => {
  const [discount, setDiscount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(fullPrice)

  useEffect(() => {
    if (!isDiscountActive) return setDiscount(0)
    setDiscount((fullPrice * discountedPercent) / 100)
  }, [fullPrice, discountedPercent, isDiscountActive])

  useEffect(() => {
    setTotalPrice(fullPrice - discount)
  }, [fullPrice, discount])

  return (
    <>
      <div>
        <p>Full Price</p>
        <p>Discount</p>
        <p className="font-bold text-lg text-green-700">Total</p>
      </div>
      <div className="text-right">
        <p>฿{fullPrice}</p>
        <p>฿{discount}</p>
        <p className="font-bold text-lg text-green-700">฿{totalPrice}</p>
      </div>
    </>
  )
}

export default PriceBreakdown
