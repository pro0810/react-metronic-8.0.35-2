import React, {FC} from 'react'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {ReportsListWrapper} from './reports-list/ReportsList'

const reportBreadCrumbs: Array<PageLink> = [
  {
    title: 'Report Management',
    path: '/reports',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ReportsPage: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={reportBreadCrumbs}>Reports List</PageTitle>
      <ReportsListWrapper />
    </>
  )
}

export default ReportsPage
