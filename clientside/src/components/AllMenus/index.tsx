import { ShortMenu } from '../../models/Menu'
import MenuCard from '../MenuCard'

export interface AllMenusProps {
  title?: string
  menus: ShortMenu[]
}

const AllMenus = ({
  menus,
  title = 'All Menus',
}: AllMenusProps) => {
  if (menus.length === 0) return <></>
  
  return (
    <>
      <h2 className="text-lg font-semibold py-3">{title}</h2>
      <div className="space-y-4">
        {menus.map((menu, index) => (
          <MenuCard menu={menu} key={index} />
        ))}
      </div>
    </>
  )
}

export default AllMenus
