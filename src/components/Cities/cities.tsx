import style from '@/styles/components/cities.module.scss'
import { cities } from '../../mocks/'

export const Cities = () => {
  return (
    <div className={style.citiesContent}>
      {cities.map((city) => (
        <a href='' key={city.id.toString()}>
          {city.name}
        </a>
      ))}
    </div>
  )
}
