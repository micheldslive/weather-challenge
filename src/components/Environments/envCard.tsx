type EnvCardProps = {
  title?: string
  text?: string
}

export const EnvCard = ({ title, text }: EnvCardProps) => {
  return (
    <div className='envCard'>
      <p aria-label='title'>{title}</p>
      <span aria-label='subtitle'>{text}</span>
    </div>
  )
}
