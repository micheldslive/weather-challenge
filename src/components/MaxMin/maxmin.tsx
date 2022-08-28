import style from '@/styles/components/maxmin.module.scss'
import { IMaxMin } from '@/core/types'
import Image from '../../assets'

export const MaxMin = ({ maxtemp_c, mintemp_c }: IMaxMin) => {
  return (
    <div className={style.maxminContent}>
      <span aria-label='maxmin'>{Image['maxmin']}</span>
      <div className={style.maxminItems}>
        <span>{maxtemp_c && Math.round(maxtemp_c)}º</span>
        <span>{mintemp_c && Math.round(mintemp_c)}º</span>
      </div>
    </div>
  )
}
