import {Column} from 'react-table'
import {UrlInfoCell} from './UrlInfoCell'
import {UrlActionsCell} from './UrlActionsCell'
import {UrlSelectionCell} from './UrlSelectionCell'
import {UrlCustomHeader} from './UrlCustomHeader'
import {UrlSelectionHeader} from './UrlSelectionHeader'
import {Url} from '../../core/_models'

const urlsColumns: ReadonlyArray<Column<Url>> = [
  {
    Header: (props) => <UrlSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <UrlSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UrlCustomHeader tableProps={props} title='Email' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <UrlInfoCell url={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <UrlCustomHeader tableProps={props} title='Url' className='min-w-125px' />,
    accessor: 'url',
  },
  {
    Header: (props) => (
      <UrlCustomHeader tableProps={props} title='Updated day' className='min-w-125px' />
    ),
    accessor: 'updatedAt',
  },
  {
    Header: (props) => (
      <UrlCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UrlActionsCell id={props.data[props.row.index].id} />,
  },
]

export {urlsColumns}
