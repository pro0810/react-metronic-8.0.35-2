/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {Report} from '../../core/_models'

type Props = {
  report: Report
}

const ReportInfoCell: FC<Props> = ({report}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {report.avatar ? (
          <div className='symbol-label'>
            <img
              src={toAbsoluteUrl(`/media/${report.avatar}`)}
              alt={report.name}
              className='w-100'
            />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${report.initials?.state}`,
              `text-${report.initials?.state}`
            )}
          >
            {report.initials?.label}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {report.name}
      </a>
      <span>{report.email}</span>
    </div>
  </div>
)

export {ReportInfoCell}
