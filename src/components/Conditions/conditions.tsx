import { IWeatherForecastHour } from '../../core/types'
import { ConditionCard } from './conditionCard'

type ConditionsProps = {
  hours: IWeatherForecastHour[]
}

export const Conditions = ({ hours }: ConditionsProps) => {
  const getCondition = (hours: IWeatherForecastHour[], current: string) => {
    const filtered = hours.filter(({ time }) => time.includes(current))
    return filtered[0]
  }

  const down = getCondition(hours, '03:00')
  const morning = getCondition(hours, '09:00')
  const afternoon = getCondition(hours, '15:00')
  const night = getCondition(hours, '21:00')

  return (
    <div className='conditionsContent'>
      {down && (
        <ConditionCard
          title='down'
          temp_c={down.temp_c}
          is_day={down.is_day}
          code={down.condition.code}
        />
      )}
      {morning && (
        <ConditionCard
          title='morning'
          temp_c={morning.temp_c}
          is_day={morning.is_day}
          code={morning.condition.code}
        />
      )}
      {afternoon && (
        <ConditionCard
          title='afternoon'
          temp_c={afternoon.temp_c}
          is_day={afternoon.is_day}
          code={afternoon.condition.code}
        />
      )}
      {night && (
        <ConditionCard
          title='night'
          temp_c={night.temp_c}
          is_day={night.is_day}
          code={night.condition.code}
        />
      )}
    </div>
  )
}
