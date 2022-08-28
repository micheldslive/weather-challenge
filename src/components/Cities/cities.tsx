import style from '@/styles/components/cities.module.scss'
import { useRouter } from 'next/router'
import { cities } from '../../mocks/'

export const Cities = () => {
  const router = useRouter()

  const handleClick = (slug: string) => {
    router.push({
      pathname: '/[slug]',
      query: { slug },
    })
  }

  return (
    <div className={style.citiesContent}>
      {cities.map(({ id, slug, name }) => (
        <button onClick={() => handleClick(slug)} key={id.toString()}>
          {name}
        </button>
      ))}
    </div>
  )
}
