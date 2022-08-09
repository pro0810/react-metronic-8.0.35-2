import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {UrlsListHeader} from './components/header/UrlsListHeader'
import {UrlsTable} from './table/UrlsTable'
import {UrlEditModal} from './url-edit-modal/UrlEditModal'
import {KTCard} from '../../../../_metronic/helpers'

const UrlsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <UrlsListHeader />
        <UrlsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <UrlEditModal />}
    </>
  )
}

const UrlsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <UrlsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {UrlsListWrapper}
