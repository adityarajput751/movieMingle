import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './reducers/homeSlice'

export const store = configureStore({
  reducer: {
    home: homeSlice
  },
})