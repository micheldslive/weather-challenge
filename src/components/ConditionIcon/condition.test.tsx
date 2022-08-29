import { getRenderer } from '@/core/tests/helpers'
import { ConditionIcon } from '.'

describe('<ConditionIcon />', () => {
  it.each(['svg'])('should have a %p element', (expected) => {
    const { queryAllByText } = useRenderer

    const titles = queryAllByText(expected)

    titles.map((title) => {
      expect(title).toBeInTheDocument()
    })
  })
})

const useRenderer = getRenderer(<ConditionIcon />)
