import { Temperatures } from '@/components/Temperatures'
import { Title } from '@/components/Title'
import { IWeatherData } from '@/core/types'
import { ConditionIcon } from '@/components/ConditionIcon'
import { BackButton } from '../../components/BackButton'
import { background } from '../../mocks/backgrounds'
import classNames from 'classnames'

type CityProps = {
  data: IWeatherData
}

export const City = ({ data }: CityProps) => {
  const { current, forecast, location } = data
  const { maxtemp_c, mintemp_c } = forecast.forecastday[0].day
  const randomNumber = Math.floor(Math.random() * 5)

  return (
    <div className={classNames('content', background[randomNumber])}>
      <div className='container'>
        <BackButton />
        <Title name={location.name} text={current.condition.text} />
        <Temperatures
          temp_c={current.temp_c}
          maxtemp_c={maxtemp_c}
          mintemp_c={mintemp_c}
        />
        <ConditionIcon is_day={current.is_day} code={current.condition.code} />
      </div>
    </div>
  )
}
