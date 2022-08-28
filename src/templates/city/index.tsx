import style from '@/styles/pages/home.module.scss'
import { useEffect } from 'react'
import { Title } from '../../components/Title'
import { IWeatherData } from '../../core/types'

type PageProps = {
  data: IWeatherData
}

export const City = ({ data }: PageProps) => {
  const { current, forecast, location } = data

  useEffect(() => {
    //console.log(data)
  }, [data])
  return (
    <div className={style.content}>
      <div className={style.container}>
        <Title name={location.name} text={current.condition.text} />
        <h2 style={{ color: 'white' }}>{data?.current.temp_c}</h2>
      </div>
    </div>
  )
}
