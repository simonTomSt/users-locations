import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from 'shared/api'
import { ResponseStatus } from 'shared/constants'
import { isFalse } from 'shared/functions'
import {
  ResponseStatusState,
  ApiResponse,
  ApiError
} from 'types/response-status-state'
import { UserLocation } from 'types/user-locations'

interface UserLocationState extends ResponseStatusState {
  location?: UserLocation
}

const initialState: UserLocationState = {}

export const fetchUserIP = createAsyncThunk<UserLocation>(
  'user-location/fetchUserIP',
  async (_, thunkAPI) => {
    const response = await api.get<ApiResponse>('/check')

    if (isFalse(response.data?.success))
      return thunkAPI.rejectWithValue(response.data.error)

    return response.data
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
