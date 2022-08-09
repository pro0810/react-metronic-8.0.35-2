import {FC} from 'react'
import clsx from 'clsx'

type Props = {
  status?: string
}

const UrlTwoStepsCell: FC<Props> = ({status}) => (
  // 'Pending', 'Accepted', 'Rejected', 'Approved', 'Cancelled'

  <div
    className={clsx(
      'badge fw-bolder',
      {'badge-light-primary': status === 'Pending'},
      {'badge-light-info': status === 'Accepted'},
      {'badge-light-danger': status === 'Rejected'},
      {'badge-light-success': status === 'Approved'}
    )}
  >
    {status}
  </div>
)

export {UrlTwoStepsCell}
