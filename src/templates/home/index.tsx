import style from '@/styles/pages/home.module.scss'

import { Title } from '@/components/Title/'
import { World } from '@/components/World'
import { Cities } from '@/components/Cities'

export const Home = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <Title />
        <World />
        <Cities />
      </div>
    </div>
  )
}
