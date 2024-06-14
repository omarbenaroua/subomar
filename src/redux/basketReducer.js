import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  equipment: [],
}
export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const equipments = state.equipment.find(info => info.id === action.payload.id)
      !equipments && state.equipment.push(action.payload)
    },
    deleteToBasket: (state, action) => {
      state.equipment = state.equipment.filter(item => item.id !== action.payload.id)
      console.log(action.payload.id)
    },
    deleteAll: (state) => {
    state.equipment = []
  }
}})

export const { addToBasket, deleteToBasket, deleteAll} = basketSlice.actions
export default basketSlice.reducer

