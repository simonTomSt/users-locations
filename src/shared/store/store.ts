import { configureStore } from '@reduxjs/toolkit'
import { isProd } from 'shared/constants'
import { searchLocationsReducer, userLocationReducer } from './slices'

export const store = configureStore({
  reducer: {
    userLocation: userLocationReducer,
    searchLocations: searchLocationsReducer
  },
  devTools: !isProd
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
