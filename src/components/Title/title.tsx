import style from '@/styles/components/title.module.scss'

type TitleProps = {
  name?: string
  main?: string
}

export const Title = ({ name, main }: TitleProps) => {
  return (
    <div className={style.titleContent}>
      <h2 aria-label='title'>{name || 'Weather'}</h2>
      <p aria-label='subtitle'>{main || 'select a city'}</p>
    </div>
  )
}
