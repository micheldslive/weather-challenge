import { EnvCard } from './envCard'

type EnviroimentsProps = {
  wind_mph?: number
  humidity?: number
  sunset?: string
  sunrise?: string
}

export const Enviroiments = ({
  wind_mph,
  humidity,
  sunset,
  sunrise,
}: EnviroimentsProps) => {
  return (
    <div className='envContent'>
      <EnvCard title='wind speed' text={`${wind_mph} m/s`}></EnvCard>
      <span></span>
      <EnvCard title='sunrise' text={sunrise}></EnvCard>
      <span></span>
      <EnvCard title='sunset' text={sunset}></EnvCard>
      <span></span>
      <EnvCard title='humidity' text={`${humidity}%`}></EnvCard>
    </div>
  )
}
