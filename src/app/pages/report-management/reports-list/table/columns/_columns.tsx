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
      <ReportCustomHeader tableProps={props} title='Email' className='min-w-125px' />
    ),
    id: 'name',
    Cell: ({...props}) => <ReportInfoCell report={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <ReportCustomHeader tableProps={props} title='Url' className='min-w-125px' />
    ),
    accessor: 'url',
  },
  {
    Header: (props) => (
      <ReportCustomHeader tableProps={props} title='Type' className='min-w-125px' />
    ),
    id: 'type',
    Cell: ({...props}) => <ReportLastLoginCell last_login={props.data[props.row.index].type} />,
  },
  {
    Header: (props) => (
      <ReportCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    id: 'status',
    Cell: ({...props}) => <ReportTwoStepsCell status={props.data[props.row.index].status} />,
  },
  {
    Header: (props) => (
      <ReportCustomHeader tableProps={props} title='Updated day' className='min-w-125px' />
    ),
    accessor: 'updatedAt',
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
