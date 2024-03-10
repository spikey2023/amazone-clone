import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

// Define a type for the slice state
interface CartState {
  cart: any
}

// Define the initial state using that type
const initialState: CartState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction) => {
      state.cart.push(action.payload)
    },
    clearCart:(state) => {
      state.cart = []
    },
    removeItem:(state, action) => {
      state.cart.splice(action.payload, 1)
    }
  },
})

export const { addToCart, removeItem, clearCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getCart = (state: RootState) => state.cart.cart

export default cartSlice.reducer