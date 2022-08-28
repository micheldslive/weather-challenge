import style from '@/styles/components/temperature.module.scss'

type TemperatureProps = {
  temp_c?: number
}

export const Temperature = ({ temp_c }: TemperatureProps) => {
  return (
    <div className={style.temperature}>
      <h1>{Math.round(temp_c)}</h1>
    </div>
  )
}
