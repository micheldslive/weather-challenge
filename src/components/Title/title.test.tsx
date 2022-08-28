import { render } from '@testing-library/react'
import { Title } from '.'

describe('<Title />', () => {
  it.each(['title'])('should have a %p element', (expected) => {
    const { getByRole } = getRenderer()
    expect(getByRole('heading', { name: expected })).toBeInTheDocument()
  })
  it.each(['subtitle'])('should have a %p element', () => {
    const { getByText } = getRenderer()
    expect(getByText('select a city')).toBeInTheDocument()
  })
})

function getRenderer() {
  return render(<Title />)
}
