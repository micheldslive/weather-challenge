import { useRouter } from 'next/router'
import { Image } from '@/mocks'

export const BackButton = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push({
      pathname: '/',
    })
  }

  return (
    <div className='backContent'>
      <a onClick={() => handleClick()} aria-label='button'>
        {Image['default']['back']}
      </a>
    </div>
  )
}
