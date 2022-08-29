import { getRenderer } from '@/core/tests/helpers'
import { EnvCard } from './envCard'

describe('<EnvCard />', () => {
  it('should render the title and subtitle correctly', () => {
    const { getByLabelText, container } = useRenderer

    expect(getByLabelText('title')).toBeInTheDocument()
    expect(getByLabelText('subtitle')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

const useRenderer = getRenderer(<EnvCard />)
