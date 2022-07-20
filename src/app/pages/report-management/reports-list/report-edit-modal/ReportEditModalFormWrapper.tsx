import {useQuery} from 'react-query'
import {ReportEditModalForm} from './ReportEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getReportById} from '../core/_requests'

const ReportEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: report,
    error,
  } = useQuery(
    `${QUERIES.REPORTS_LIST}-report-${itemIdForUpdate}`,
    () => {
      return getReportById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err: any) => {
        setItemIdForUpdate(undefined)
        console.error(err)
      },
    }
  )

  if (!itemIdForUpdate) {
    return <ReportEditModalForm isReportLoading={isLoading} report={{id: undefined}} />
  }

  if (!isLoading && !error && report) {
    return <ReportEditModalForm isReportLoading={isLoading} report={report} />
  }

  return null
}

export {ReportEditModalFormWrapper}
