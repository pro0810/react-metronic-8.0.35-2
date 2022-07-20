import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {ReportsListHeader} from './components/header/ReportsListHeader'
import {ReportsTable} from './table/ReportsTable'
import {ReportEditModal} from './report-edit-modal/ReportEditModal'
import {KTCard} from '../../../../_metronic/helpers'

const ReportsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <ReportsListHeader />
        <ReportsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <ReportEditModal />}
    </>
  )
}

const ReportsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <ReportsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ReportsListWrapper}
