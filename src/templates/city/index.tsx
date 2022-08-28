import style from '@/styles/pages/home.module.scss'
import { useEffect } from 'react'
import { Temperature } from '../../components/Temperature'
import { Title } from '../../components/Title'
import { IWeatherData } from '../../core/types'

type PageProps = {
  data: IWeatherData
}

export const City = ({ data }: PageProps) => {
  const { current, location } = data

  useEffect(() => {
    //console.log(data)
  }, [data])
  return (
    <div className={style.content}>
      <div className={style.container}>
        <Title name={location.name} text={current.condition.text} />
        <div className={style.TemperatureContainer}>
          <Temperature temp_c={current.temp_c} />
          <div className={style.TemperatureDetails}>
            <span>C</span>
            <span>MIN MAX</span>
          </div>
        </div>
      </div>
    </div>
  )
}
