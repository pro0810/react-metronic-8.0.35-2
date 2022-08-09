import {KTSVG} from '../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {UrlsListFilter} from './UrlsListFilter'

const UrlsListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddUrlModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-url-table-toolbar='base'>
      <UrlsListFilter />

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add url */}
      <button type='button' className='btn btn-primary' onClick={openAddUrlModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Url
      </button>
      {/* end::Add url */}
    </div>
  )
}

export {UrlsListToolbar}
