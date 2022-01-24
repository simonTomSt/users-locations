import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from 'shared/api'
import { ResponseStatus, StorageKey } from 'shared/constants'
import { isFalse } from 'shared/functions'
import { sessionStorageManager } from 'shared/functions'

import type {
  ApiError,
  ApiResponse,
  ResponseStatusState,
  LocationData
} from 'shared/types'
import type { RootState } from '../store'

interface SearchLocationsState extends ResponseStatusState {
  locations: LocationData[]
}

const storedLocations = sessionStorageManager<LocationData[]>(
  StorageKey.Searches
).getValue([])

const initialState: SearchLocationsState = {
  locations: storedLocations
}

export const fetchLocation = createAsyncThunk<ApiResponse, string>(
  'search-locations/fetchLocation',
  async (ipAddress, thunkAPI) => {
    const { data } = await api.get(ipAddress)

    if (isFalse(data?.success)) {
      return thunkAPI.rejectWithValue(data.error)
    }

    const updatedLocations = [...storedLocations]
    updatedLocations.push(data)
    sessionStorageManager<LocationData[]>(StorageKey.Searches).setValue(
      updatedLocations
    )

    return data
  }
)

export const searchLocationsSlice = createSlice({
  name: 'search-locations',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLocation.fulfilled, (state, { payload }) => {
      state.locations.push(payload)
      state.status = ResponseStatus.Fulfilled
    })
    builder.addCase(fetchLocation.pending, state => {
      state.status = ResponseStatus.Pending
    })
    builder.addCase(fetchLocation.rejected, (state, { payload }) => {
      state.error = payload as ApiError
      state.status = ResponseStatus.Rejected
    })
  }
})

export const searchLocationsReducer = searchLocationsSlice.reducer

export const selectSearchLocations = (state: RootState) => state.searchLocations
export const selectSearchLocationStatus = (state: RootState) =>
  state.searchLocations.status
export const selectLastSearchLocationDetails = (state: RootState) => {
  const lastLocation = state.searchLocations.locations.slice(-1)[0]
  if (!lastLocation) return null

  return {
    flag: lastLocation.location.country_flag_emoji,
    capital: lastLocation.location.capital,
    city: lastLocation.city,
    zip: lastLocation.zip,
    region: lastLocation.region_name
  }
}
