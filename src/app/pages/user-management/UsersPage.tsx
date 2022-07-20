import React, {FC} from 'react'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {UsersListWrapper} from './users-list/UsersList'

const userBreadCrumbs: Array<PageLink> = [
  {
    title: 'User Management',
    path: '/users',
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

const UsersPage: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={userBreadCrumbs}>Users List</PageTitle>
      <UsersListWrapper />
    </>
  )
}

export default UsersPage
