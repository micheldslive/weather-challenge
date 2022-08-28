import type { NextPage } from 'next'
import style from '@/styles/pages/index.module.scss'

import { Title } from '@/components/Title/'
import { World } from '@/components/World'
import { Cities } from '@/components/Cities'

const Home: NextPage = () => {
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

export default Home
