import { configureStore } from '@reduxjs/toolkit'
import { isProd } from 'shared/constants'
import { usersLocationsReducer, userLocationReducer } from './slices'

export const store = configureStore({
  reducer: {
    userLocation: userLocationReducer,
    usersLocations: usersLocationsReducer
  },
  devTools: !isProd
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
