import axios, { Axios, AxiosError } from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MenuAccordion from '../../components/Accordion'
import { FullMenu } from '../../models/Menu'
import PriceBreakdown from '../../components/PriceBreakdown'
import SoldProgress from '../../components/SoldProgress'
import BackButton from '../../components/BackButton'
import { StoreProps } from '../../stores/store'
import { inject, observer } from 'mobx-react'
import NotFound from '../NotFound'
import Loading from '../../components/Loading'
import { apiBasePath } from '../../utils/constant'

const Menu: FC<StoreProps> = ({ restaurantStore }) => {
  const { menuName } = useParams()
  const { isTimeInRange, strPeriodToDate } = restaurantStore!
  const [menu, setMenu] = useState<FullMenu>()
  const [error, setError] = useState<AxiosError>()

  useEffect(() => getFullMenuDetail(), [])

  const getFullMenuDetail = () => {
    axios
      .get<FullMenu>(
        apiBasePath + `/${menuName}/full`
      )
      .then((res) => {
        setMenu(res.data)
      })
      .catch((err) => setError(err))
  }

  const getImageUrl = () => {
    if (!menu) return ''
    return menu.largeImage ?? menu.thumbnailImage ?? '/no-photo.svg'
  }

  const isDiscountActive = () => {
    if (!menu || !menu.discountedTimePeriod) return false
    return isTimeInRange(
      new Date(),
      strPeriodToDate(menu.discountedTimePeriod?.begin),
      strPeriodToDate(menu.discountedTimePeriod?.end)
    )
  }

  if (error && error.response && error.response.status === 404) {
    return <NotFound />
  }

  if (menu) {
    return (
      <div className="w-screen h-screen">
        {/* <BackButton url={`/${restaurantId}`} /> */}
        <img
          src={getImageUrl()}
          alt={menu.name}
          className="w-full h-1/3 object-cover"
        />
        <div className="py-6 px-3 text-xl font-bold">{menu.name}</div>
        <div className="px-3 pb-4">
          <SoldProgress
            sold={menu.sold}
            total={menu.sold + menu.totalInStock}
          />
        </div>
        <hr style={{ border: '4px solid #F5F5F5' }} />
        <MenuAccordion options={menu.options} />
        {menu.options.length > 0 && (
          <hr style={{ border: '4px solid #F5F5F5' }} />
        )}
        <div className="my-3 flex justify-between px-3">
          <PriceBreakdown
            fullPrice={menu.fullPrice}
            discountedPercent={menu.discountedPercent}
            isDiscountActive={isDiscountActive()}
          />
        </div>
        <hr style={{ border: '4px solid #F5F5F5' }} />
      </div>
    )
  }

  return <Loading />
}

export default inject('restaurantStore')(observer(Menu))
