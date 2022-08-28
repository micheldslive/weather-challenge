import style from '@/styles/components/title.module.scss'

type TitleProps = {
  name?: string
  text?: string
}

export const Title = ({ name, text }: TitleProps) => {
  return (
    <div className={style.titleContent}>
      <h2 aria-label='title'>{name || 'Weather'}</h2>
      <p aria-label='subtitle'>{text || 'select a city'}</p>
    </div>
  )
}
