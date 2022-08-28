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
    <div className='citiesContent'>
      {cities.map(({ id, slug, name }) => (
        <a onClick={() => handleClick(slug)} key={id.toString()}>
          {name}
        </a>
      ))}
    </div>
  )
}
