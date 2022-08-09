import {useQuery} from 'react-query'
import {UrlEditModalForm} from './UrlEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getUrlById} from '../core/_requests'

const UrlEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: url,
    error,
  } = useQuery(
    `${QUERIES.URLS_LIST}-url-${itemIdForUpdate}`,
    () => {
      return getUrlById(itemIdForUpdate)
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
    return <UrlEditModalForm isUrlLoading={isLoading} url={{id: undefined}} />
  }

  if (!isLoading && !error && url) {
    return <UrlEditModalForm isUrlLoading={isLoading} url={url} />
  }

  return null
}

export {UrlEditModalFormWrapper}
