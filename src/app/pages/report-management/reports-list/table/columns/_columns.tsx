import {Column} from 'react-table'
import {ReportInfoCell} from './ReportInfoCell'
import {ReportLastLoginCell} from './ReportLastLoginCell'
import {ReportTwoStepsCell} from './ReportTwoStepsCell'
import {ReportActionsCell} from './ReportActionsCell'
import {ReportSelectionCell} from './ReportSelectionCell'
import {ReportCustomHeader} from './ReportCustomHeader'
import {ReportSelectionHeader} from './ReportSelectionHeader'
import {Report} from '../../core/_models'

const reportsColumns: ReadonlyArray<Column<Report>> = [
  {
    Header: (props) => <ReportSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <ReportSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => (
      <ReportCustomHeader tableProps={props} title='Name' className='min-w-125px' />
    ),
    id: 'name',
    Cell: ({...props}) => <ReportInfoCell report={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <ReportCustomHeader tableProps={props} title='Role' className='min-w-125px' />
    ),
    accessor: 'role',
  },
  {
    Header: (props) => (
      <ReportCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
    ),
    id: 'last_login',
    Cell: ({...props}) => (
      <ReportLastLoginCell last_login={props.data[props.row.index].updatedAt} />
    ),
  },
  {
    Header: (props) => (
      <ReportCustomHeader tableProps={props} title='Email Verified' className='min-w-125px' />
    ),
    id: 'isEmailVerified',
    Cell: ({...props}) => (
      <ReportTwoStepsCell isEmailVerified={props.data[props.row.index].isEmailVerified} />
    ),
  },
  {
    Header: (props) => (
      <ReportCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'createdAt',
  },
  {
    Header: (props) => (
      <ReportCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ReportActionsCell id={props.data[props.row.index].id} />,
  },
]

export {reportsColumns}
