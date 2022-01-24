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

interface SearchLocationsState extends ResponseStatusState {
  locations: LocationData[]
}

const initialState: SearchLocationsState = {
  locations: []
}

export const fetchLocation = createAsyncThunk<ApiResponse, string>(
  'search-locations/fetchLocation',
  async (ipAddress, thunkAPI) => {
    const response = await api.get(ipAddress)

    if (isFalse(response.data?.success))
      return thunkAPI.rejectWithValue(response.data.error)

    return response.data
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
