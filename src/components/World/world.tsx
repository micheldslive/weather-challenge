import { Image } from '@/mocks'

export const World = () => {
  return (
    <div className='worldContent'>
      <p aria-label='world'>{Image['default']['world']}</p>
    </div>
  )
}
