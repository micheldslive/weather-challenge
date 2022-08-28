import style from '@/styles/components/world.module.scss'
import Image from '../../assets'

export const World = () => {
  return (
    <div className={style.worldContent}>
      <p>{Image['world']}</p>
    </div>
  )
}
