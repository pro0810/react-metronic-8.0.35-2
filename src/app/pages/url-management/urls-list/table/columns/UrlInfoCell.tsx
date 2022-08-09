/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {Url} from '../../core/_models'

type Props = {
  url: Url
}

const UrlInfoCell: FC<Props> = ({url}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {url.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${url.avatar}`)} alt={url.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${url.initials?.state}`,
              `text-${url.initials?.state}`
            )}
          >
            {url.initials?.label}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {url.name}
      </a>
      <span>{url.email}</span>
    </div>
  </div>
)

export {UrlInfoCell}
