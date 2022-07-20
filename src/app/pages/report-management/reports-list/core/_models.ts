import {ID, Response} from '../../../../../_metronic/helpers'
export type Report = {
  id?: ID
  url?: string
  email?: string
  name?: string
  avatar?: string
  status?: string
  type?: string
  updatedAt?: string
  createdAt?: string
  initials?: {
    label: string
    state: string
  }
}

export type ReportsQueryResponse = Response<Array<Report>>

export const initialReport: Report = {
  url: '',
  email: '',
  name: '',
  avatar: 'avatars/blank.png',
  status: '',
  type: '',
}
