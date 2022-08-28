import { Title } from '@/components/Title/'
import { World } from '@/components/World'
import { Cities } from '@/components/Cities'

export const Home = () => {
  return (
    <div className='homeContent'>
      <div className='homeContainer'>
        <Title />
        <World />
        <Cities />
      </div>
    </div>
  )
}
