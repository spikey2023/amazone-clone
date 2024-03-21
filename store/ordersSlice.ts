import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

// Define a type for the slice state
interface OrdersState {
  orders: any
}

// Define the initial state using that type (starting the initial state of no orders)
const initialState: OrdersState = {
  orders: [{items: [], totalPrice:0, date: ""}],
}

export const ordersSlice = createSlice({
  name: 'orders',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToOrders: (state, action) => {
      state.orders.push(action.payload)
    },
  },
})

export const { addToOrders } = ordersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getOrders = (state: RootState) => state.orders.orders

export default ordersSlice.reducer