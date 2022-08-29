import { ConditionIcon } from '@/components/ConditionIcon'

type EnvCardProps = {
  title?: string
  temp_c?: number
  is_day?: number
  code?: number
}

export const ConditionsCard = ({
  title,
  temp_c,
  is_day,
  code,
}: EnvCardProps) => {
  return (
    <div className='conditionsCard'>
      <p aria-label='title'>{title}</p>
      <ConditionIcon is_day={is_day} code={code} />
      <span aria-label='subtitle'>{temp_c && Math.round(temp_c)} ºC</span>
    </div>
  )
}
