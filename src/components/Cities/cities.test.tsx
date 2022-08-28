import { render } from '@testing-library/react'
import { cities } from '../../mocks'
import { Cities } from '.'

describe('<Cities />', () => {
  it.each(['Link'])('should have a %p elements', () => {
    const { getByText } = render(<Cities />)
    cities.map(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
