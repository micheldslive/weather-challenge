import style from '@/styles/components/title.module.scss'

type TitleProps = {
  name?: string
  main?: string
}

export const Title = ({ name, main }: TitleProps) => {
  return (
    <div className={style.titleContent}>
      <h2>{name || 'Weather'}</h2>
      <p>{main || 'select a city'}</p>
    </div>
  )
}
