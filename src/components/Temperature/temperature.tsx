import style from '@/styles/components/temperature.module.scss'
import { MaxMin } from '../MaxMin/'
import { ITemperature } from '@/core/types'

export const Temperature = (props: ITemperature) => {
  return (
    <div className={style.temperatureContainer}>
      <div className={style.temperature}>
        <h1>{props.temp_c && Math.round(props.temp_c)}</h1>
      </div>
      <div className={style.temperatureDetails}>
        <span className={style.tempCelcious}>ºC</span>
        <MaxMin {...props} />
      </div>
    </div>
  )
}
