import {KTSVG} from '../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'

const ReportEditModalHeader = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()

  return (
    <div className='modal-header'>
      {/* begin::Modal title */}
      <h2 className='fw-bolder'>{itemIdForUpdate ? 'Edit Report' : 'Add Report'} </h2>
      {/* end::Modal title */}

      {/* begin::Close */}
      <div
        className='btn btn-icon btn-sm btn-active-icon-primary'
        data-kt-reports-modal-action='close'
        onClick={() => setItemIdForUpdate(undefined)}
        style={{cursor: 'pointer'}}
      >
        <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
      </div>
      {/* end::Close */}
    </div>
  )
}

export {ReportEditModalHeader}
