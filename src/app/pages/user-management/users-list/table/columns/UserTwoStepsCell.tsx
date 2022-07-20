import {FC} from 'react'

type Props = {
  isEmailVerified?: boolean
}

const UserTwoStepsCell: FC<Props> = ({isEmailVerified}) => (
  <> {isEmailVerified && <div className='badge badge-light-success fw-bolder'>Verified</div>}</>
)

export {UserTwoStepsCell}
