export interface DiscountedTimePeriod {
  begin: string
  end: string
}

export interface MenuOption {
  label: string
  choices: {
    label: string
  }[]
}

export interface ShortMenu {
  name: string
  id: string
  thumbnailImage?: string
  fullPrice: number
  discountedPercent: number
  discountedTimePeriod?: DiscountedTimePeriod
  sold: number
  totalInStock: number
}

export interface FullMenu {
  name: string
  id: string
  thumbnailImage?: string
  fullPrice: number
  discountedPercent: number
  discountedTimePeriod?: DiscountedTimePeriod
  sold: number
  totalInStock: number
  largeImage?: string
  options: MenuOption[]
}
