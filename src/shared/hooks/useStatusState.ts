import { ResponseStatus } from 'shared/constants'

export const useStatusState = (status: ResponseStatus) => ({
  rejected: status === ResponseStatus.Rejected,
  fulfilled: status === ResponseStatus.Fulfilled,
  pending: status === ResponseStatus.Pending
})
