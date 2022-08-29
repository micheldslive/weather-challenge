import { conditionDay } from '../../mocks/conditionNames'
import Image from '../../mocks/images'

interface IConditionIcon {
  is_day?: number
  code?: number
}

export const ConditionIcon = ({ is_day, code }: IConditionIcon) => {
  const selectedCondition = conditionDay[code ? code : 1000]
  const isDay = is_day ? 'day' : 'night'

  return (
    <div className='conditionContent'>
      <p>{Image[isDay][selectedCondition]}</p>
    </div>
  )
}
