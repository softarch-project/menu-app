import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { ShortMenu } from '../../models/Menu'
import { HiChevronDoubleRight } from 'react-icons/hi'
import Price from './Price'

export interface MenuCardHorizontalProps {
  restaurantId: string
  menu: ShortMenu
}

const MenuCard = memo(({ restaurantId, menu }: MenuCardHorizontalProps) => {
  const imageUrl = menu.thumbnailImage ?? '/no-photo.svg'

  const isInDiscount = () => {
    if (!menu.discountedTimePeriod) return false
    const begin = menu.discountedTimePeriod?.begin.split(':')
    const end = menu.discountedTimePeriod?.end.split(':')
    const currentTime = new Date()
    const beginTime = new Date()
    beginTime.setHours(
      parseInt(begin[0]),
      parseInt(begin[1] ?? 0),
      parseInt(begin[2] ?? 0)
    )
    const endTime = new Date()
    endTime.setHours(
      parseInt(end[0]),
      parseInt(end[1] ?? 0),
      parseInt(end[2] ?? 0)
    )
    return currentTime > beginTime && currentTime < endTime
  }

  const getMenuUrl = () => `/${restaurantId}/${menu.name}`

  return (
    <Link to={getMenuUrl()} className="flex space-x-4 w-full">
      <div className="w-[30%] grid place-content-center">
        <img
          src={imageUrl}
          alt={menu.name}
          className="rounded-lg w-full object-cover"
        />
        {menu.discountedPercent > 0 && isInDiscount() && (
          <div className="absolute pt-2">
            <p className="bg-red-400 px-2 py-1 text-sm rounded-r-lg">
              {menu.discountedPercent}% off
            </p>
          </div>
        )}
      </div>
      <div className="w-[60%] pt-2 space-y-3">
        <p className="text-base">{menu.name}</p>
        <Price
          fullPrice={menu.fullPrice}
          discountedPercent={menu.discountedPercent}
          isInDiscount={isInDiscount()}
        />
      </div>
      <div className="w-[10%] grid place-content-center">
        <div className="p-1 border-2 rounded-full border-green-700 text-green-700">
          <HiChevronDoubleRight />
        </div>
      </div>
    </Link>
  )
})

export default MenuCard
