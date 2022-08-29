import { useRouter } from 'next/router'
import Image from '../../mocks/images'

export const BackButton = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push({
      pathname: '/',
    })
  }

  return (
    <div className='backContent'>
      <a onClick={() => handleClick()}>{Image['all']['back']}</a>
    </div>
  )
}
