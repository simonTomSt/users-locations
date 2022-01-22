import { ResponseStatus } from 'shared/constants'

export interface ApiError {
  code: number
  type: string
  info: string
}

export interface ApiErrorResponse {
  success: boolean
  error: ApiError
}

export type ApiResponse = UserLocation & ApiErrorResponse

export interface ResponseStatusState {
  status?: ResponseStatus
  error?: ApiError
}
