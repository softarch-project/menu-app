import { ShortMenu } from '../../models/Menu'
import MenuCard from '../MenuCard'

export interface AllMenusProps {
  title?: string
  restaurantId: string
  menus: ShortMenu[]
}

const AllMenus = ({
  restaurantId,
  menus,
  title = 'All Menus',
}: AllMenusProps) => {
  if (menus.length === 0) return <></>
  
  return (
    <>
      <h2 className="text-lg font-semibold py-3">{title}</h2>
      <div className="space-y-4">
        {menus.map((menu, index) => (
          <MenuCard restaurantId={restaurantId} menu={menu} key={index} />
        ))}
      </div>
    </>
  )
}

export default AllMenus
