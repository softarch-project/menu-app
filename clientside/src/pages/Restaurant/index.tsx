import React, { FC, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import HoursStatusElement from '../../components/HoursStatus'
import './index.css'
import ActiveHours from '../../components/ActiveHours'
import AllMenus from '../../components/AllMenus'
import { inject, observer } from 'mobx-react'
import { StoreProps } from '../../stores/store'
import NotFound from '../NotFound'
import Loading from '../../components/Loading'

const RestaurantPage: FC<StoreProps> = ({ restaurantStore }) => {
  const {
    restaurant,
    menus,
    setRestaurantId,
    isStillOpen,
    restaurantError,
    menusOnSale,
  } = restaurantStore!
  const { restaurantId } = useParams()

  const HoursStatus = useMemo(
    () => <HoursStatusElement isActive={isStillOpen} />,
    [restaurant?.activeTimePeriod]
  )

  useEffect(() => {
    document.addEventListener('scroll', () => {
      document
        .getElementById('title')
        ?.classList.toggle('title-background', window.scrollY > 270)
    })
  }, [])

  useEffect(() => {
    if (restaurantId) setRestaurantId(parseInt(restaurantId))
  }, [restaurantId])

  if (
    restaurantError &&
    restaurantError.response &&
    restaurantError.response.status === 404
  ) {
    return <NotFound />
  }

  if (restaurant) {
    return (
      <div className="w-screen">
        <img
          src={restaurant?.coverImage}
          alt="Restaurant Banner"
          className="object-cover h-[15rem] w-full static"
        />
        <div className="relative">
          <div className="bg-white w-full absolute top-[-30px] rounded-t-3xl flex justify-center">
            <div className="max-w-2xl">
              <div className="pt-5 px-5">{HoursStatus}</div>
              <h1
                id="title"
                className="pt-5 pb-3 px-5 font-bold text-xl sticky top-0 w-full transition duration-300 z-[99]"
              >
                {restaurant?.name}
              </h1>
              <div className="text-xs px-5">
                <ActiveHours
                  open={restaurant?.activeTimePeriod.open ?? ''}
                  close={restaurant?.activeTimePeriod.close ?? ''}
                />
              </div>
              {restaurantId && menusOnSale.length > 0 && (
                <div className="py-5 px-5">
                  <AllMenus
                    title="On Sale"
                    restaurantId={restaurantId}
                    menus={menusOnSale}
                  />
                </div>
              )}
              <div className="py-5 px-5">
                {restaurantId && (
                  <AllMenus restaurantId={restaurantId} menus={menus} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return <Loading />
}

export default inject('restaurantStore')(observer(RestaurantPage))
