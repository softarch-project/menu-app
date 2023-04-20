interface PriceProps {
  fullPrice: number
  discountedPercent: number
  isInDiscount: boolean
}

const Price = ({ fullPrice, discountedPercent, isInDiscount }: PriceProps) => {
  const discountedPrice = fullPrice - (fullPrice * discountedPercent) / 100

  const hasDiscount = isInDiscount && discountedPercent > 0

  return (
    <div className="flex space-x-2">
      {hasDiscount && (
        <p className="font-semibold text-green-800">฿{discountedPrice}</p>
      )}
      <p
        className={
          'font-semibold' +
          (hasDiscount ? ' line-through text-gray-700' : ' text-green-800')
        }
      >
        ฿{fullPrice}
      </p>
    </div>
  )
}

export default Price
