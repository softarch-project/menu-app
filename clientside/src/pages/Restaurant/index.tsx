import React, { FC, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import './index.css'
import AllMenus from '../../components/AllMenus'
import { inject, observer } from 'mobx-react'
import { StoreProps } from '../../stores/store'
import NotFound from '../NotFound'
import Loading from '../../components/Loading'

const RestaurantPage: FC<StoreProps> = ({ restaurantStore }) => {
  const {
    menus,
    menusOnSale,
  } = restaurantStore!

  useEffect(() => {
    document.addEventListener('scroll', () => {
      document
        .getElementById('title')
        ?.classList.toggle('title-background', window.scrollY > 270)
    })
  }, [])

return (
  <div className="w-screen">
    <img
      src= "https://cdn.sortiraparis.com/images/61/100789/834011-too-restaurant-too-hotel-paris-photos-menu.jpg"
      alt="Restaurant Banner"
      className="object-cover h-[15rem] w-full static"
    />
    <div className="relative">
      <div className="bg-white w-full absolute top-[-30px] rounded-t-3xl flex justify-center">
        <div className="max-w-2xl">
          <h1
            id="title"
            className="pt-5 pb-3 px-5 font-bold text-xl sticky top-0 w-full transition duration-300 z-[99]"
          >
            Klua BoonMee
          </h1>
          {menusOnSale.length > 0 && (
            <div className="py-5 px-5">
              <AllMenus
                title="On Sale"
                menus={menusOnSale}
              />
            </div>
          )}
          <div className="py-5 px-5">
              <AllMenus menus={menus} />
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default inject('restaurantStore')(observer(RestaurantPage))
