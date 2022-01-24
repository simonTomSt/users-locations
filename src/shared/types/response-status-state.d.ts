import { ResponseStatus } from 'shared/constants'
import { LocationData } from './locations-api'

export interface ApiError {
  code: number
  type: string
  info: string
}

export interface ApiErrorResponse {
  success: boolean
  error: ApiError
}

export type ApiResponse = LocationData & ApiErrorResponse

export interface ResponseStatusState {
  status?: ResponseStatus
  error?: ApiError
}
