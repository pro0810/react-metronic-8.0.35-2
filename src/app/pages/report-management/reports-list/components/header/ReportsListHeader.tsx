import {useListView} from '../../core/ListViewProvider'
import {ReportsListToolbar} from './ReportListToolbar'
import {ReportsListGrouping} from './ReportsListGrouping'
import {ReportsListSearchComponent} from './ReportsListSearchComponent'

const ReportsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <ReportsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <ReportsListGrouping /> : <ReportsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {ReportsListHeader}
