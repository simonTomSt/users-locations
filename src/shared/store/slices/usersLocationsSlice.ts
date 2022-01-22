import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from 'shared/api'
import { UserLocation } from 'types/user-locations'

type UsersLocationsState = {
  locations: UserLocation[]
}

const initialState: UsersLocationsState = {
  locations: []
}

export const fetchLocation = createAsyncThunk<UserLocation, string>(
  'users-locations/fetchLocation',
  async ipAddress => {
    const response = await api.get(ipAddress)
    return response.data
  }
)

export const usersLocationsSlice = createSlice({
  name: 'users-locations',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLocation.fulfilled, (state, { payload }) => {
      state.locations.push(payload)
    })
  }
})

export const usersLocationsReducer = usersLocationsSlice.reducer
