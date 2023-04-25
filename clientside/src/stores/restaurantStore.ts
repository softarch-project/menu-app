import axios, { all, AxiosError } from 'axios'
import {
  action,
  computed,
  makeObservable,
  observable,
  reaction,
  runInAction,
} from 'mobx'
import { ShortMenu } from '../models/Menu'
import Restaurant from '../models/Restaurant'
import { apiBasePath } from '../utils/constant'

export class RestaurantStore {
  @observable restaurant?: Restaurant
  @observable menus: ShortMenu[] = []
  @observable restaurantError?: AxiosError
  @observable menusOnSale: ShortMenu[] = []
  @observable menuMostPopular: ShortMenu[] = []

  constructor() {
    makeObservable(this)
    this.fetchShortMenus()
    reaction(
      () => this.restaurant?.menus,
      () => {
        this.fetchShortMenus()
      }
    )
  }

  @action.bound
  async fetchShortMenus() {
    
    const response = await axios.get<ShortMenu>(
      apiBasePath + `shortMenu`
    )
    runInAction(() => (this.menus = [...this.menus, response.data]))
    if (this.isOnSale(response.data)) {
      runInAction(
        () => (this.menusOnSale = [...this.menusOnSale, response.data])
      )
    }
  }

  isOnSale = (menu: ShortMenu): boolean => {
    if (menu.discountedPercent === 0 || !menu.discountedTimePeriod) return false
    const beginTime = this.strPeriodToDate(menu.discountedTimePeriod.begin)
    const endTime = this.strPeriodToDate(menu.discountedTimePeriod.end)
    return this.isTimeInRange(new Date(), beginTime, endTime)
  }

  strPeriodToDate = (periodStr: string) => {
    const date = new Date()
    const periodList = periodStr.split(':')
    date.setHours(
      parseInt(periodList[0]),
      parseInt(periodList[1]),
      parseInt(periodList[2] ?? 0)
    )
    return date
  }

  isTimeInRange = (
    innerBound: Date,
    outerBoundBegin: Date,
    outerBoundEnd: Date
  ) => {
    return outerBoundBegin <= innerBound && outerBoundEnd >= innerBound
  }
}

export const restaurantStore = new RestaurantStore()
