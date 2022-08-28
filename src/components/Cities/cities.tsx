import style from '@/styles/components/cities.module.scss'
import { useRouter } from 'next/router'
import { cities } from '../../mocks/'

export const Cities = () => {
  const router = useRouter()

  const handleClick = (city: string, country: string) => {
    router.push({
      pathname: '/[city]',
      query: { city: `${city},${country}` },
    })
  }

  return (
    <div className={style.citiesContent}>
      {cities.map(({ id, city, country }) => (
        <a onClick={() => handleClick(city, country)} key={id.toString()}>
          {city}
        </a>
      ))}
    </div>
  )
}
