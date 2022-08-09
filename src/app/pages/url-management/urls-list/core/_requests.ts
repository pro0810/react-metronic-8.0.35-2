import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../_metronic/helpers'
import {Url, UrlsQueryResponse} from './_models'

// const API_URL = process.env.REACT_APP_THEME_API_URL
// const URL_URL = `${API_URL}/url`
// const GET_URLS_URL = `${API_URL}/urls/query`

const API_URL = process.env.REACT_APP_API_URL
const URL_URL = `${API_URL}/urls`
const GET_URLS_URL = `${API_URL}/urls`

const getUrls = (query: string): Promise<UrlsQueryResponse> => {
  return axios.get(`${GET_URLS_URL}?${query}`).then((d: AxiosResponse<UrlsQueryResponse>) => d.data)
}

const getUrlById = (id: ID): Promise<Url | undefined> => {
  return axios
    .get(`${URL_URL}/${id}`)
    .then((response: AxiosResponse<Response<Url>>) => response.data)
    .then((response: Response<Url>) => response.data)
}

const createUrl = (url: Url): Promise<Url | undefined> => {
  return axios
    .post(URL_URL, {url: url.url, email: url.email})
    .then((response: AxiosResponse<Response<Url>>) => response.data)
    .then((response: Response<Url>) => response.data)
}

const updateUrl = (url: Url): Promise<Url | undefined> => {
  return axios
    .post(`${URL_URL}/${url.id}`, {
      url: url.url,
    })
    .then((response: AxiosResponse<Response<Url>>) => response.data)
    .then((response: Response<Url>) => response.data)
}

const deleteUrl = (urlId: ID): Promise<void> => {
  return axios.delete(`${URL_URL}/${urlId}`).then(() => {})
}

const deleteSelectedUrls = (urlIds: Array<ID>): Promise<void> => {
  const requests = urlIds.map((id) => axios.delete(`${URL_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getUrls, deleteUrl, deleteSelectedUrls, getUrlById, createUrl, updateUrl}
