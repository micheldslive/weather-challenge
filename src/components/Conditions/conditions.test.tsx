import { getRenderer } from '@/core/tests/helpers'
import { ConditionsCard } from './conditionsCard'

describe('<ConditionsCard />', () => {
  it('should render the Card title and subtitle correctly', () => {
    const { getByLabelText } = useRenderer

    expect(getByLabelText('title')).toBeInTheDocument()
    expect(getByLabelText('subtitle')).toBeInTheDocument()
  })
})

const useRenderer = getRenderer(<ConditionsCard />)
