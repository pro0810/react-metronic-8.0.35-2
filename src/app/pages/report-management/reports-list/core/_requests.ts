import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../_metronic/helpers'
import {Report, ReportsQueryResponse} from './_models'

// const API_URL = process.env.REACT_APP_THEME_API_URL
// const REPORT_URL = `${API_URL}/report`
// const GET_REPORTS_URL = `${API_URL}/reports/query`

const API_URL = process.env.REACT_APP_API_URL
const REPORT_URL = `${API_URL}/customers`
const GET_REPORTS_URL = `${API_URL}/customers`

const getReports = (query: string): Promise<ReportsQueryResponse> => {
  return axios
    .get(`${GET_REPORTS_URL}?${query}`)
    .then((d: AxiosResponse<ReportsQueryResponse>) => d.data)
}

const getReportById = (id: ID): Promise<Report | undefined> => {
  return axios
    .get(`${REPORT_URL}/${id}`)
    .then((response: AxiosResponse<Response<Report>>) => response.data)
    .then((response: Response<Report>) => response.data)
}

const createReport = (report: Report): Promise<Report | undefined> => {
  return axios
    .put(REPORT_URL, report)
    .then((response: AxiosResponse<Response<Report>>) => response.data)
    .then((response: Response<Report>) => response.data)
}

const updateReport = (report: Report): Promise<Report | undefined> => {
  return axios
    .post(`${REPORT_URL}/${report.id}`, {
      name: report.name,
      isEmailVerified: report.isEmailVerified,
      role: report.role,
    })
    .then((response: AxiosResponse<Response<Report>>) => response.data)
    .then((response: Response<Report>) => response.data)
}

const deleteReport = (reportId: ID): Promise<void> => {
  return axios.delete(`${REPORT_URL}/${reportId}`).then(() => {})
}

const deleteSelectedReports = (reportIds: Array<ID>): Promise<void> => {
  const requests = reportIds.map((id) => axios.delete(`${REPORT_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getReports, deleteReport, deleteSelectedReports, getReportById, createReport, updateReport}
