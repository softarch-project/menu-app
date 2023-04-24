import axios from 'axios'

const API_BASE_PATH =
  'https://jti1oyj8zb.execute-api.ap-southeast-1.amazonaws.com/dev'

export const GetBillDetails = async (billId: string) => {
  const response = await axios.get(API_BASE_PATH + `/bills/${billId}`)
  console.log(response)
}

export const placeOrder = async (
  billId: string,
  menuName: string,
  options: string[],
  price: number,
  photoUrl: string
) => {
  const response = await axios.post(API_BASE_PATH + `/new-order`, {
    billId,
    menuName,
    options,
    price,
    photoUrl
  })
  console.log(response)
}
