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
      src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sortiraparis.com%2Fen%2Fwhere-to-eat-in-paris%2Frestaurant%2Farticles%2F278227-too-restaurant-we-tested-the-sublime-panoramic-restaurant-of-paris-menu-and-pictures&psig=AOvVaw1Jh9m85I9TOJ6MWCEzAxiO&ust=1682458720328000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKDs5qa9w_4CFQAAAAAdAAAAABAI"
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
