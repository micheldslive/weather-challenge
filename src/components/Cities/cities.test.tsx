import { render } from '@testing-library/react'
import { Cities } from '.'

describe('<Cities />', () => {
  it.each(['Link'])('should have a %p element', () => {
    const { getByText } = getRenderer()
    expect(getByText('Dallol')).toBeInTheDocument()
  })
})

function getRenderer() {
  return render(<Cities />)
}
