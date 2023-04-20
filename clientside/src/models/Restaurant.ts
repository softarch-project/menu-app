export interface ActiveTimePeriod {
  open: string
  close: string
}

export default interface Restaurant {
  name: string
  id: number
  coverImage: string
  menus: string[]
  activeTimePeriod: ActiveTimePeriod
}
