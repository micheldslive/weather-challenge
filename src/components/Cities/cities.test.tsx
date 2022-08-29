import { cities } from '@/mocks'
import { getRenderer } from '@/core/tests/helpers'
import { Cities } from '.'

describe('<Cities />', () => {
  it.each(['Link'])('should have a %p elements', () => {
    const { getByText } = useRenderer
    cities.map(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})

const useRenderer = getRenderer(<Cities />)
