import {ID, Response} from '../../../../../_metronic/helpers'
export type Report = {
  id?: ID
  name?: string
  avatar?: string
  email?: string
  position?: string
  role?: string
  updatedAt?: string
  isEmailVerified?: boolean
  createdAt?: string
  online?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type ReportsQueryResponse = Response<Array<Report>>

export const initialReport: Report = {
  avatar: 'avatars/blank.png',
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
}
