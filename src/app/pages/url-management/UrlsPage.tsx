import React, {FC} from 'react'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {UrlsListWrapper} from './urls-list/UrlsList'

const urlBreadCrumbs: Array<PageLink> = [
  {
    title: 'Url Management',
    path: '/urls',
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

const UrlsPage: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={urlBreadCrumbs}>Urls List</PageTitle>
      <UrlsListWrapper />
    </>
  )
}

export default UrlsPage
