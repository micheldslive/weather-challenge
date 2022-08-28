import { ITemperature } from '@/core/types'
import Image from '../../mocks/images'

export const Temperatures = ({
  temp_c,
  maxtemp_c,
  mintemp_c,
}: ITemperature) => {
  return (
    <div className='temperatureContainer'>
      <div className='temperature'>
        <h1>{temp_c && Math.round(temp_c)}</h1>
      </div>
      <div className='temperatureDetails'>
        <span className='tempCelcious'>ºC</span>
        <div className='maxminContent'>
          <span aria-label='maxmin'>{Image['all']['maxmin']}</span>
          <div className='maxminItems'>
            <span>{maxtemp_c && Math.round(maxtemp_c)}º</span>
            <span>{mintemp_c && Math.round(mintemp_c)}º</span>
          </div>
        </div>
      </div>
    </div>
  )
}
