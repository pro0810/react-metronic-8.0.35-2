import {KTSVG} from '../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {ReportsListFilter} from './ReportsListFilter'

const ReportsListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddReportModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-report-table-toolbar='base'>
      <ReportsListFilter />

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add report */}
      <button type='button' className='btn btn-primary' onClick={openAddReportModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Report
      </button>
      {/* end::Add report */}
    </div>
  )
}

export {ReportsListToolbar}
