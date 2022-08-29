type EnvCardProps = {
  title?: string
  text?: string
}

export const EnvCard = ({ title, text }: EnvCardProps) => {
  return (
    <div className='envCard'>
      <p aria-label='title' className='title'>
        {title}
      </p>
      <span aria-label='subtitle' className='subtitle'>
        {text}
      </span>
    </div>
  )
}
