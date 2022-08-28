import { Temperatures } from '@/components/Temperatures'
import { Title } from '@/components/Title'
import { IWeatherData } from '@/core/types'

type CityProps = {
  data: IWeatherData
}

export const City = ({ data }: CityProps) => {
  const { current, forecast, location } = data
  const { maxtemp_c, mintemp_c } = forecast.forecastday[0].day

  return (
    <div className='content dark'>
      <div className='container'>
        <Title name={location.name} text={current.condition.text} />
        <Temperatures
          temp_c={current.temp_c}
          maxtemp_c={maxtemp_c}
          mintemp_c={mintemp_c}
        />
      </div>
    </div>
  )
}
