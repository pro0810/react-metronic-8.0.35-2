import {ID, Response} from '../../../../../_metronic/helpers'
export type Url = {
  id?: ID
  url?: string
  email?: string
  name?: string
  avatar?: string
  updatedAt?: string
  createdAt?: string
  initials?: {
    label: string
    state: string
  }
}

export type UrlsQueryResponse = Response<Array<Url>>

export const initialUrl: Url = {
  url: '',
  email: '',
  name: '',
  avatar: 'avatars/blank.png',
}
