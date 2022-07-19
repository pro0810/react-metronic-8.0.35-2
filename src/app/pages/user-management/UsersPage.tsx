import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {UsersListWrapper} from './users-list/UsersList'

const UsersPage: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Layout Builder</PageTitle>
      <UsersListWrapper />
    </>
  )
}

export default UsersPage
