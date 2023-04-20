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
  @observable restaurantId?: number
  @observable menus: ShortMenu[] = []
  @observable restaurantError?: AxiosError
  @observable menusOnSale: ShortMenu[] = []
  @observable menuMostPopular: ShortMenu[] = []

  constructor() {
    makeObservable(this)

    reaction(
      () => this.restaurantId,
      () => {
        this.fetchRestaurant()
      }
    )

    reaction(
      () => this.restaurant?.menus,
      () => {
        this.fetchShortMenus()
      }
    )
  }

  @action.bound
  setRestaurantId(id: number) {
    runInAction(() => (this.restaurantId = id))
  }

  @action.bound
  fetchRestaurant() {
    runInAction(() => (this.restaurant = undefined))
    axios
      .get<Restaurant>(apiBasePath + `/restaurants/${this.restaurantId}`)
      .then((res) => {
        runInAction(() => (this.restaurant = res.data))
        runInAction(() => (this.menus = []))
        runInAction(() => (this.menusOnSale = []))
        document.title = res.data.name + ' | Online Menu'
      })
      .catch((err) => {
        runInAction(() => (this.restaurantError = err))
      })
  }

  @action.bound
  async fetchShortMenus() {
    if (!this.restaurant) return
    for (const menuName of this.restaurant.menus) {
      const response = await axios.get<ShortMenu>(
        apiBasePath +
          `/restaurants/${this.restaurantId}/menus/${menuName}/short`
      )
      runInAction(() => (this.menus = [...this.menus, response.data]))
      if (this.isOnSale(response.data)) {
        runInAction(
          () => (this.menusOnSale = [...this.menusOnSale, response.data])
        )
      }
    }
  }

  @computed get isStillOpen(): boolean {
    if (!this.restaurant) return false
    const openDate = this.strPeriodToDate(this.restaurant.activeTimePeriod.open)
    const closeDate = this.strPeriodToDate(
      this.restaurant.activeTimePeriod.close
    )
    return this.isTimeInRange(new Date(), openDate, closeDate)
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
