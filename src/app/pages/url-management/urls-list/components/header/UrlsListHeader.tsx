import {useListView} from '../../core/ListViewProvider'
import {UrlsListToolbar} from './UrlListToolbar'
import {UrlsListGrouping} from './UrlsListGrouping'
import {UrlsListSearchComponent} from './UrlsListSearchComponent'

const UrlsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <UrlsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <UrlsListGrouping /> : <UrlsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {UrlsListHeader}
