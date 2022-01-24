import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from 'shared/api'
import { ResponseStatus } from 'shared/constants'
import { isFalse } from 'shared/functions'

import type {
  ApiError,
  ApiResponse,
  ResponseStatusState,
  LocationData
} from 'shared/types'
import type { RootState } from '../store'

interface UserLocationState extends ResponseStatusState {
  location: LocationData | null
}

const initialState: UserLocationState = {
  location: null
}

export const fetchUserIP = createAsyncThunk<ApiResponse>(
  'user-location/fetchUserIP',
  async (_, thunkAPI) => {
    const { data } = await api.get<ApiResponse>('/check')

    if (isFalse(data?.success)) return thunkAPI.rejectWithValue(data.error)

    return data
  }
)

export const userLocationSlice = createSlice({
  name: 'user-location',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserIP.fulfilled, (state, { payload }) => {
      state.location = payload
      state.status = ResponseStatus.Fulfilled
    })
    builder.addCase(fetchUserIP.pending, state => {
      state.status = ResponseStatus.Pending
    })
    builder.addCase(fetchUserIP.rejected, (state, { payload }) => {
      state.error = payload as ApiError
      state.status = ResponseStatus.Rejected
    })
  }
})

export const userLocationReducer = userLocationSlice.reducer

export const selectCurrentUserLocation = (state: RootState) =>
  state.userLocation
export const selectCurrentUserLocationStatus = (state: RootState) =>
  state.searchLocations.status
export const selectCurrentUserLocationDetails = (state: RootState) => {
  const userLocation = state.userLocation.location
  if (!userLocation) return null

  return {
    flag: userLocation.location.country_flag_emoji,
    country: userLocation.continent_name,
    capital: userLocation.location.capital,
    city: userLocation.city,
    zip: userLocation.zip,
    region: userLocation.region_name
  }
}
export const selectCurrentUserLocationCoordinates = (state: RootState) => {
  const userLocation = state.userLocation.location
  if (!userLocation) return null

  return {
    lat: userLocation.latitude,
    lng: userLocation.longitude
  }
}
